#!/usr/bin/env python3
"""Compress all images in public/ to WebP format with quality optimization."""
from PIL import Image
import os, glob, sys

SITE_DIR = "/Users/humanarchitect/human-architect-site"
PUBLIC_DIR = os.path.join(SITE_DIR, "public")

# Settings
COVER_MAX_W = 400      # Book covers displayed at ~300px
PREVIEW_MAX_W = 600    # Page previews displayed at ~300px
AVATAR_MAX_W = 200     # Avatar
QUALITY = 80           # WebP quality (80 is great balance)

total_saved = 0
converted = 0
skipped = 0

def compress(src_path, max_width, quality):
    global total_saved, converted, skipped
    
    rel_path = os.path.relpath(src_path, SITE_DIR)
    dst_path = src_path.rsplit('.', 1)[0] + '.webp'
    
    img = Image.open(src_path)
    orig_w, orig_h = img.size
    
    # Resize if too large
    if orig_w > max_width:
        ratio = max_width / orig_w
        new_h = int(orig_h * ratio)
        img = img.resize((max_width, new_h), Image.Resampling.LANCZOS)
    
    # Convert to RGB if necessary (for PNGs with alpha)
    if img.mode in ('RGBA', 'LA', 'P'):
        # Keep alpha for covers, flatten for previews
        if 'pages' in src_path:
            bg = Image.new('RGB', img.size, (255, 255, 255))
            if img.mode == 'P':
                img = img.convert('RGBA')
            bg.paste(img, mask=img.split()[-1] if img.mode == 'RGBA' else None)
            img = bg
        # For covers with alpha, keep as-is for WebP
    
    img.save(dst_path, 'WEBP', quality=quality, method=6)
    
    orig_size = os.path.getsize(src_path)
    new_size = os.path.getsize(dst_path)
    saved = orig_size - new_size
    total_saved += saved
    converted += 1
    
    print(f"  {rel_path}: {orig_size//1024}KB -> {new_size//1024}KB (saved {saved//1024}KB)")
    return dst_path

# 1. Book covers
print("\n=== BOOK COVERS ===")
covers = [
    "public/books/intelligent-design.png",
    "public/books/alkaline-awakening.png", 
    "public/books/parasite-conspiracy.png",
    "public/books/life-force-energy.png",
    "public/books/quit-prn-manual.png",
]
for f in covers:
    path = os.path.join(SITE_DIR, f)
    if os.path.exists(path):
        compress(path, COVER_MAX_W, QUALITY)

# 2. Page previews
print("\n=== PAGE PREVIEWS ===")
for f in sorted(glob.glob(os.path.join(PUBLIC_DIR, "books/pages/*.png"))):
    compress(f, PREVIEW_MAX_W, QUALITY)

# 3. Avatar and other public images
print("\n=== OTHER ASSETS ===")
for f in glob.glob(os.path.join(PUBLIC_DIR, "*.png")) + glob.glob(os.path.join(PUBLIC_DIR, "*.jpg")):
    compress(f, AVATAR_MAX_W, QUALITY)

# 4. Any remaining PNGs in subdirectories
print("\n=== REMAINING ===")
for f in glob.glob(os.path.join(PUBLIC_DIR, "**/*.png"), recursive=True):
    if not f.endswith('.webp') and '.webp' not in f:
        # Skip if already processed
        webp_version = f.rsplit('.', 1)[0] + '.webp'
        if os.path.exists(webp_version):
            skipped += 1
            continue
        compress(f, PREVIEW_MAX_W, QUALITY)

print(f"\n=== SUMMARY ===")
print(f"Converted: {converted} images")
print(f"Skipped: {skipped} images")
print(f"Total saved: {total_saved // 1024}KB ({total_saved // (1024*1024)}MB)")
print(f"\nNew public/ size: {sum(os.path.getsize(os.path.join(dp,f)) for dp,dn,fnames in os.walk(PUBLIC_DIR) for f in fnames) // (1024*1024)}MB")
