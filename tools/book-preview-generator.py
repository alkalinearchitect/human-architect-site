#!/usr/bin/env python3
"""
book-preview-generator.py — Run on Mac 2
Generates beautiful book preview screenshots and upscales them.

Usage:
  python3 book-preview-generator.py --scan                          # Scan available pages
  python3 book-preview-generator.py --generate --book alkaline-awakening  # Generate previews for one book
  python3 book-preview-generator.py --generate --all                # Generate all books
  python3 book-preview-generator.py --upscale --all                 # Upscale existing previews
  python3 book-preview-generator.py --full --all                    # Generate + upscale everything

Requirements (install on Mac 2):
  pip3 install Pillow selenium webdriver-manager
  # OR for headless Safari:
  # safaridriver --enable
"""

import os
import sys
import json
import time
import shutil
import argparse
import subprocess
from pathlib import Path

# === CONFIGURATION ===
SITE_DIR = Path.home() / "human-architect-site"
PAGES_DIR = SITE_DIR / "public" / "books" / "pages"
COVERS_DIR = SITE_DIR / "public" / "book-covers"
PREVIEWS_DIR = SITE_DIR / "public" / "book-previews"
OUTPUT_DIR = SITE_DIR / "public" / "book-previews-hd"

# Book definitions — maps slug to page file prefixes
BOOKS = {
    "alkaline-awakening": {
        "title": "Alkaline Awakening",
        "page_prefixes": ["aa-p", "alkaline-awakening-p", "alkaline-awakening-best-p"],
        "cover": "alkaline-awakening.webp",
    },
    "intelligent-design": {
        "title": "Intelligent Design",
        "page_prefixes": ["id-p", "intelligent-design-p"],
        "cover": "intelligent-design.webp",
    },
    "parasite-conspiracy": {
        "title": "Parasite Conspiracy",
        "page_prefixes": ["pc-p", "parasite-conspiracy-p"],
        "cover": "parasite-conspiracy.webp",
    },
    "life-force-energy": {
        "title": "Life Force Energy",
        "page_prefixes": ["lfe-p", "life-force-energy-p"],
        "cover": "life-force-energy.webp",
    },
    "quit-prn": {
        "title": "Quit PRN Manual",
        "page_prefixes": ["quit-prn-p", "qr-p"],
        "cover": "quit-prn.webp",
    },
}

# === SCAN PAGES ===
def scan_pages():
    """Scan available page images and report."""
    print(f"📖 Scanning {PAGES_DIR}...")
    
    if not PAGES_DIR.exists():
        print(f"❌ Pages directory not found: {PAGES_DIR}")
        return
    
    all_files = sorted(PAGES_DIR.glob("*.*"))
    images = [f for f in all_files if f.suffix.lower() in ('.png', '.jpg', '.jpeg', '.webp')]
    
    print(f"\nTotal images: {len(images)}")
    
    # Group by prefix
    prefixes = {}
    for img in images:
        # Extract prefix (everything before the last number)
        name = img.stem
        # Try to find a number suffix
        parts = name.rsplit('-', 1)
        if len(parts) == 2 and parts[1].isdigit():
            prefix = parts[0]
        else:
            prefix = name
        prefixes.setdefault(prefix, []).append(img)
    
    print(f"\nPage groups ({len(prefixes)} prefixes):")
    for prefix in sorted(prefixes.keys()):
        files = prefixes[prefix]
        print(f"  {prefix}: {len(files)} files")
        for f in files[:3]:
            size = f.stat().st_size // 1024
            print(f"    {f.name} ({size}KB)")
        if len(files) > 3:
            print(f"    ... and {len(files)-3} more")
    
    # Check covers
    print(f"\n📕 Covers:")
    for slug, book in BOOKS.items():
        cover_path = COVERS_DIR / book["cover"]
        exists = "✅" if cover_path.exists() else "❌"
        print(f"  {exists} {slug}: {book['cover']}")
    
    # Check existing previews
    print(f"\n🖼️  Existing previews:")
    for slug in BOOKS:
        preview_dir = PREVIEWS_DIR / slug
        if preview_dir.exists():
            count = len(list(preview_dir.glob("*.*")))
            print(f"  {slug}: {count} files")
        else:
            print(f"  {slug}: no preview dir")

# === GENERATE HTML VIEWER ===
def generate_html_viewer(book_slug, page_files, output_path):
    """Generate an HTML file that displays a book page nicely for screenshotting."""
    
    pages_html = ""
    for i, page_file in enumerate(page_files):
        # Use file:// URL for local files
        file_url = page_file.as_uri()
        pages_html += f"""
    <div class="page" id="page-{i}">
        <img src="{file_url}" alt="Page {i+1}">
        <div class="page-number">{i+1}</div>
    </div>"""
    
    html = f"""<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{BOOKS[book_slug]['title']} — Preview</title>
<style>
* {{ margin: 0; padding: 0; box-sizing: border-box; }}
body {{
    background: #0a0a0a;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    min-height: 100vh;
    padding: 40px;
}}
.page {{
    width: 800px;
    min-height: 1100px;
    background: #fff;
    margin: 0 auto 40px;
    padding: 0;
    box-shadow: 0 4px 60px rgba(0,0,0,0.6);
    position: relative;
    overflow: hidden;
}}
.page img {{
    width: 100%;
    height: auto;
    display: block;
}}
.page-number {{
    position: absolute;
    bottom: 20px;
    right: 30px;
    font-size: 14px;
    color: #999;
    font-weight: 500;
}}
h1 {{
    text-align: center;
    color: #e8e6df;
    font-size: 24px;
    margin-bottom: 40px;
    font-weight: 300;
    letter-spacing: 2px;
}}
</style>
</head>
<body>
<h1>{BOOKS[book_slug]['title']}</h1>
{pages_html}
</body>
</html>"""
    
    output_path.write_text(html)
    return output_path

# === SCREENSHOT WITH SAFARI ===
def screenshot_with_safari(html_path, output_dir, book_slug):
    """Use macOS's built-in Safari via osascript to screenshot pages."""
    
    import subprocess
    
    output_dir = Path(output_dir)
    output_dir.mkdir(parents=True, exist_ok=True)
    
    screenshots = []
    
    # Use webkit2png or wkhtmltoimage if available, otherwise use Safari + osascript
    # First check what tools are available
    tools = {}
    for tool in ['wkhtmltoimage', 'webkit2png', 'puppeteer', 'playwright']:
        result = subprocess.run(['which', tool], capture_output=True)
        tools[tool] = result.returncode == 0
    
    if tools.get('wkhtmltoimage'):
        # Use wkhtmltoimage
        png_path = output_dir / f"{book_slug}-preview.png"
        subprocess.run([
            'wkhtmltoimage',
            '--width', '800',
            '--quality', '95',
            str(html_path),
            str(png_path)
        ], check=True)
        screenshots.append(png_path)
        
    elif tools.get('webkit2png'):
        # Use webkit2png
        result = subprocess.run([
            'webkit2png',
            '--width=800',
            '--fullsize',
            '-o', str(output_dir / book_slug),
            str(html_path)
        ], capture_output=True)
        
    else:
        # Fallback: Use macOS's built-in screenshot via Safari
        # Open in Safari, then use screencapture
        subprocess.run(['open', '-a', 'Safari', str(html_path)])
        time.sleep(3)
        
        # Take screenshot of Safari window
        png_path = output_dir / f"{book_slug}-preview.png"
        subprocess.run([
            'screencapture',
            '-x',  # no sound
            '-t', 'png',
            str(png_path)
        ])
        
        # Close Safari tab
        subprocess.run(['osascript', '-e', 'tell application "Safari" to close front window'])
        
        screenshots.append(png_path)
    
    return screenshots

# === UPSCALE WITH PIL ===
def upscale_image(input_path, output_path, scale=2):
    """Upscale an image using PIL with Lanczos resampling."""
    try:
        from PIL import Image
    except ImportError:
        print("  ❌ Pillow not installed. Run: pip3 install Pillow")
        return False
    
    img = Image.open(input_path)
    w, h = img.size
    new_size = (w * scale, h * scale)
    try:
        resample = Image.Resampling.LANCZOS
    except AttributeError:
        resample = Image.LANCZOS
    img = img.resize(new_size, resample)
    
    # Save with high quality
    if output_path.suffix.lower() == '.webp':
        img.save(str(output_path), quality=95, method=6)
    elif output_path.suffix.lower() in ('.jpg', '.jpeg'):
        img.save(str(output_path), quality=95, optimize=True)
    else:
        img.save(str(output_path), optimize=True)
    
    return True

def upscale_all(input_dir, output_dir, scale=2):
    """Upscale all images in a directory."""
    input_dir = Path(input_dir)
    output_dir = Path(output_dir)
    output_dir.mkdir(parents=True, exist_ok=True)
    
    images = []
    for ext in ('*.png', '*.jpg', '*.jpeg', '*.webp'):
        images.extend(input_dir.rglob(ext))
    
    print(f"🖼️  Upscaling {len(images)} images ({scale}x)...")
    
    done = 0
    skipped = 0
    errors = 0
    
    for img_path in images:
        # Preserve relative path
        rel = img_path.relative_to(input_dir)
        out_path = output_dir / rel
        out_path.parent.mkdir(parents=True, exist_ok=True)
        
        if out_path.exists():
            skipped += 1
            continue
        
        if upscale_image(img_path, out_path, scale):
            done += 1
            size_kb = out_path.stat().st_size // 1024
            print(f"  ✅ {rel} ({size_kb}KB)")
        else:
            errors += 1
    
    print(f"\n✅ Done: {done} upscaled, {skipped} skipped, {errors} errors")
    print(f"Output: {output_dir}")

# === GENERATE PREVIEWS FOR ONE BOOK ===
def generate_book_previews(book_slug, max_pages=6):
    """Generate preview images for a specific book."""
    
    if book_slug not in BOOKS:
        print(f"❌ Unknown book: {book_slug}")
        print(f"Available: {', '.join(BOOKS.keys())}")
        return
    
    book = BOOKS[book_slug]
    print(f"\n📕 Generating previews for: {book['title']}")
    
    # Find page files
    page_files = []
    for prefix in book["page_prefixes"]:
        for f in sorted(PAGES_DIR.glob(f"{prefix}*")):
            if f.suffix.lower() in ('.png', '.jpg', '.jpeg', '.webp'):
                page_files.append(f)
    
    if not page_files:
        # Try scanning all files for this book
        print(f"  No pages found with prefixes {book['page_prefixes']}")
        print(f"  Scanning all files in {PAGES_DIR}...")
        for f in sorted(PAGES_DIR.iterdir()):
            if f.suffix.lower() in ('.png', '.jpg', '.jpeg', '.webp'):
                page_files.append(f)
        print(f"  Found {len(page_files)} total images (using first {max_pages})")
    
    # Limit pages
    page_files = page_files[:max_pages]
    print(f"  Using {len(page_files)} pages")
    
    # Generate HTML viewer
    html_path = Path(f"/tmp/book-viewer-{book_slug}.html")
    generate_html_viewer(book_slug, page_files, html_path)
    print(f"  HTML viewer: {html_path}")
    
    # Screenshot
    output_dir = PREVIEWS_DIR / book_slug
    output_dir.mkdir(parents=True, exist_ok=True)
    
    screenshots = screenshot_with_safari(html_path, output_dir, book_slug)
    print(f"  Screenshots: {len(screenshots)}")
    
    return screenshots

# === MAIN ===
def main():
    parser = argparse.ArgumentParser(description="Book preview generator — run on Mac 2")
    parser.add_argument('--scan', action='store_true', help='Scan available pages')
    parser.add_argument('--generate', action='store_true', help='Generate previews')
    parser.add_argument('--upscale', action='store_true', help='Upscale images')
    parser.add_argument('--full', action='store_true', help='Generate + upscale')
    parser.add_argument('--book', type=str, help='Specific book slug')
    parser.add_argument('--all', action='store_true', help='All books')
    parser.add_argument('--pages', type=int, default=6, help='Max pages per book (default: 6)')
    parser.add_argument('--scale', type=int, default=2, help='Upscale factor (default: 2)')
    parser.add_argument('--input', type=str, help='Input directory for upscale')
    parser.add_argument('--output', type=str, help='Output directory for upscale')
    parser.add_argument('--site-dir', type=str, help=f'Site directory (default: {SITE_DIR})')
    
    args = parser.parse_args()
    
    global SITE_DIR, PAGES_DIR, COVERS_DIR, PREVIEWS_DIR, OUTPUT_DIR
    
    if args.site_dir:
        SITE_DIR = Path(args.site_dir)
        PAGES_DIR = SITE_DIR / "public" / "books" / "pages"
        COVERS_DIR = SITE_DIR / "public" / "book-covers"
        PREVIEWS_DIR = SITE_DIR / "public" / "book-previews"
        OUTPUT_DIR = SITE_DIR / "public" / "book-previews-hd"
    
    if args.scan:
        scan_pages()
        return
    
    if args.generate or args.full:
        if args.all:
            for slug in BOOKS:
                generate_book_previews(slug, args.pages)
        elif args.book:
            generate_book_previews(args.book, args.pages)
        else:
            print("Specify --book <slug> or --all")
            return
    
    if args.upscale or args.full:
        input_dir = args.input or PREVIEWS_DIR
        output_dir = args.output or OUTPUT_DIR
        upscale_all(input_dir, output_dir, args.scale)
    
    if not any([args.scan, args.generate, args.upscale, args.full]):
        parser.print_help()
        print(f"\n📖 Quick start:")
        print(f"  python3 book-preview-generator.py --scan           # See what pages exist")
        print(f"  python3 book-preview-generator.py --generate --all  # Generate all previews")
        print(f"  python3 book-preview-generator.py --upscale --all   # Upscale all previews")
        print(f"  python3 book-preview-generator.py --full --all      # Do everything")

if __name__ == "__main__":
    main()
