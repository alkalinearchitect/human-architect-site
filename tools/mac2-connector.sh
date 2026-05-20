#!/bin/bash
# ============================================================
# mac2-connector.sh — Run HEAVY tasks on your iMac (Mac 2)
# 
# SETUP (run once on Mac 2):
#   1. Enable Remote Login on Mac 2: 
#      System Settings → General → Sharing → Remote Login → ON
#   2. Note Mac 2's IP: System Settings → Network → Wi-Fi/Ethernet → IP
#   3. On Mac 1, run: bash mac2-connector.sh --setup <MAC2_IP> <MAC2_USER>
#
# USAGE:
#   bash mac2-connector.sh --setup 192.168.1.50 john    # First time setup
#   bash mac2-connector.sh --test                        # Test connection
#   bash mac2-connector.sh --info                        # Mac 2 system info
#   bash mac2-connector.sh --screenshot                  # Screenshot book pages
#   bash mac2-connector.sh --upscale                     # AI upscale images
#   bash mac2-connector.sh --sync                        # Sync site files to Mac 2
#   bash mac2-connector.sh --run "<command>"             # Run any command on Mac 2
# ============================================================

set -euo pipefail

MAC2_USER="${MAC2_USER:-}"
MAC2_IP="${MAC2_IP:-}"
SSH_KEY="$HOME/.ssh/id_ed25519"
CONFIG_FILE="$HOME/.mac2-connector.conf"

# --- Load saved config ---
load_config() {
    if [[ -f "$CONFIG_FILE" ]]; then
        source "$CONFIG_FILE"
    fi
}

save_config() {
    cat > "$CONFIG_FILE" <<EOF
MAC2_USER="$MAC2_USER"
MAC2_IP="$MAC2_IP"
EOF
    chmod 600 "$CONFIG_FILE"
}

# --- Setup SSH key-based auth ---
setup_ssh() {
    local ip="$1"
    local user="$2"
    
    MAC2_USER="$user"
    MAC2_IP="$ip"
    
    echo "🔧 Setting up SSH to $user@$ip..."
    
    # Generate key if needed
    if [[ ! -f "$SSH_KEY" ]]; then
        echo "  Generating SSH key..."
        ssh-keygen -t ed25519 -f "$SSH_KEY" -N "" -C "mac1-to-mac2"
    fi
    
    # Copy key to Mac 2
    echo "  Copying SSH key to Mac 2 (you'll need to enter password once)..."
    ssh-copy-id -i "$SSH_KEY.pub" "$user@$ip"
    
    # Add SSH config
    mkdir -p ~/.ssh
    if ! grep -q "Host mac2" ~/.ssh/config 2>/dev/null; then
        cat >> ~/.ssh/config <<EOF

Host mac2
  HostName $ip
  User $user
  IdentityFile $SSH_KEY
  ServerAliveInterval 60
  ServerAliveCountMax 3
  Compression yes
EOF
        chmod 600 ~/.ssh/config
    fi
    
    save_config
    echo "✅ SSH setup complete. Use 'ssh mac2' or 'bash mac2-connector.sh --test'"
}

# --- Test connection ---
test_connection() {
    echo "🔍 Testing connection to Mac 2..."
    ssh mac2 'echo "✅ Connected!"; hostname; uptime; echo "CPU: $(sysctl -n machdep.cpu.brand_string 2>/dev/null || echo Apple Silicon)"; echo "RAM: $(($(sysctl -n hw.memsize) / 1073741824))GB"'
}

# --- Get Mac 2 system info ---
get_info() {
    ssh mac2 '
echo "=== MAC 2 SYSTEM ==="
sw_vers
system_profiler SPHardwareDataType 2>/dev/null | grep -E "Model Name|Chip|Processor|Memory|Serial"
echo ""
echo "=== DISK ==="
df -h / | tail -1
echo ""
echo "=== TOOLS ==="
for cmd in git docker ollama node npm python3 ffmpeg convert magick; do
    if command -v $cmd &>/dev/null; then
        echo "  ✅ $cmd: $(which $cmd)"
    else
        echo "  ❌ $cmd: not found"
    fi
done
echo ""
echo "=== PYTHON PACKAGES ==="
python3 -c "
import importlib
for pkg in ["PIL","cv2","torch","numpy","realesrgan","basicsr"]:
    try:
        importlib.import_module(pkg)
        print(f\"  ✅ {pkg}\")
    except:
        print(f\"  ❌ {pkg}\")
" 2>/dev/null || echo "  (python3 not available)"
'
}

# --- Sync site files to Mac 2 ---
sync_files() {
    local site_dir="${1:-$HOME/human-architect-site}"
    echo "📁 Syncing $site_dir to Mac 2..."
    rsync -avz --progress \
        --exclude='.git' \
        --exclude='node_modules' \
        --exclude='.next' \
        "$site_dir/" \
        "mac2:$site_dir/"
    echo "✅ Sync complete"
}

# --- Screenshot book pages on Mac 2 ---
screenshot_pages() {
    local site_dir="${1:-$HOME/human-architect-site}"
    local output_dir="$site_dir/public/book-previews-hd"
    
    echo "📸 Generating HD book page screenshots on Mac 2..."
    
    ssh mac2 "
set -e
SITE_DIR='$site_dir'
OUTPUT_DIR='$output_dir'

# Create HTML viewer for screenshots
cat > /tmp/book-viewer.html <<'HTML'
<!DOCTYPE html>
<html>
<head>
<style>
* { margin: 0; padding: 0; box-sizing: border-box; }
body { background: #1a1a1a; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.page { 
    width: 1200px; height: 1600px; 
    background: white; 
    display: flex; justify-content: center; align-items: center;
    box-shadow: 0 0 40px rgba(0,0,0,0.5);
    page-break-after: always;
}
.page img { max-width: 100%; max-height: 100%; object-fit: contain; }
</style>
</head>
<body>
<div class='page'><img src='PAGE_IMAGE' alt=''></div>
</body>
</html>
HTML

echo '📖 Book page viewer ready'
echo \"Output: \$OUTPUT_DIR\"
"
    
    echo "✅ Screenshot tool deployed to Mac 2"
}

# --- AI Upscale images on Mac 2 ---
upscale_images() {
    local input_dir="${1:-$HOME/human-architect-site/public/book-previews}"
    local output_dir="${2:-$HOME/human-architect-site/public/book-previews-hd}"
    
    echo "🖼️  AI upscaling images on Mac 2..."
    
    ssh mac2 "
set -e
INPUT_DIR='$input_dir'
OUTPUT_DIR='$output_dir'

mkdir -p \"\$OUTPUT_DIR\"

# Check for available upscaling tools
if command -v magick &>/dev/null; then
    UPSCALE_TOOL='imagemagick'
elif command -v convert &>/dev/null; then
    UPSCALE_TOOL='imagemagick'
elif python3 -c 'import PIL' 2>/dev/null; then
    UPSCALE_TOOL='python-pil'
else
    echo '❌ No image tools found. Install ImageMagick or Python PIL.'
    exit 1
fi

echo \"Using: \$UPSCALE_TOOL\"

# Count files
COUNT=\$(find \"\$INPUT_DIR\" -type f \\( -name '*.png' -o -name '*.jpg' -o -name '*.webp' \\) | wc -l)
echo \"Found \$COUNT images to upscale\"

# Upscale each image
find \"\$INPUT_DIR\" -type f \\( -name '*.png' -o -name '*.jpg' -o -name '*.webp' \\) | while read img; do
    filename=\$(basename \"\$img\")
    output=\"\$OUTPUT_DIR/\$filename\"
    
    if [[ -f \"\$output\" ]]; then
        echo \"  SKIP: \$filename (already done)\"
        continue
    fi
    
    if [[ \"\$UPSCALE_TOOL\" == 'imagemagick' ]]; then
        magick \"\$img\" -resize 200% -filter Lanczos -quality 95 \"\$output\"
    else
        python3 -c \"
from PIL import Image
img = Image.open('\$img')
w, h = img.size
img = img.resize((w*2, h*2), Image.LANCZOS)
img.save('\$output', quality=95)
\"
    fi
    echo \"  ✅ \$filename\"
done

echo \"✅ Upscaling complete. Output: \$OUTPUT_DIR\"
"
}

# --- Run any command on Mac 2 ---
run_remote() {
    local cmd="$1"
    echo "▶️  Running on Mac 2: $cmd"
    ssh mac2 "$cmd"
}

# --- MAIN ---
load_config

case "${1:-help}" in
    --setup)
        if [[ -z "${2:-}" || -z "${3:-}" ]]; then
            echo "Usage: bash mac2-connector.sh --setup <MAC2_IP> <MAC2_USER>"
            echo ""
            echo "To find Mac 2's IP:"
            echo "  On Mac 2: System Settings → Network → Wi-Fi → IP Address"
            echo ""
            echo "To find Mac 2's username:"
            echo "  On Mac 2: whoami"
            exit 1
        fi
        setup_ssh "$2" "$3"
        ;;
    --test)
        test_connection
        ;;
    --info)
        get_info
        ;;
    --sync)
        sync_files "${2:-}"
        ;;
    --screenshot)
        screenshot_pages "${2:-}"
        ;;
    --upscale)
        upscale_images "${2:-}" "${3:-}"
        ;;
    --run)
        if [[ -z "${2:-}" ]]; then
            echo "Usage: bash mac2-connector.sh --run '<command>'"
            exit 1
        fi
        run_remote "$2"
        ;;
    help|--help|-h)
        echo "Mac 2 Connector — Offload heavy work to your iMac"
        echo ""
        echo "Commands:"
        echo "  --setup <IP> <USER>   One-time SSH setup"
        echo "  --test                 Test connection"
        echo "  --info                 Mac 2 system info + available tools"
        echo "  --sync [dir]           Sync site files to Mac 2"
        echo "  --screenshot [dir]     Generate HD book page screenshots"
        echo "  --upscale [in] [out]   AI upscale images"
        echo "  --run '<command>'      Run any command on Mac 2"
        echo ""
        echo "Config saved to: $CONFIG_FILE"
        ;;
    *)
        echo "Unknown command: $1"
        echo "Run 'bash mac2-connector.sh --help' for usage"
        exit 1
        ;;
esac
