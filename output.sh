#!/usr/bin/bash
# Deploy ShirazLinux site: commit output/ and push live branch.
# Source counter lives next to this script (input/.deploy_counnter)
# Deploy repo: ../output  →  branch main  →  origin + github

set -e
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$SCRIPT_DIR/../output"

if ! git rev-parse --is-inside-work-tree > /dev/null 2>&1; then
    echo "output directory is not under version control"
    exit 1
fi

cd "$SCRIPT_DIR"
DEPLOY_FILE=".deploy_counnter"
if [ ! -f "$DEPLOY_FILE" ]; then
    echo 91 > "$DEPLOY_FILE"
fi

DEPLOY_NUM=$(cat "$DEPLOY_FILE")
DEPLOY_NUM=$((DEPLOY_NUM + 1))
echo "$DEPLOY_NUM" > "$DEPLOY_FILE"

cd "$SCRIPT_DIR/../output"

# Publii sometimes HTML-encodes "=" in cache-busting query strings (?v&#x3D;hash).
# Browsers may still load CSS, but fix it so URLs stay clean and reliable.
if command -v python3 >/dev/null 2>&1; then
  python3 - <<'PY'
from pathlib import Path
for p in Path('.').rglob('*.html'):
    if '.git' in p.parts:
        continue
    try:
        t = p.read_text(encoding='utf-8')
    except Exception:
        continue
    if '&#x3D;' in t or '&#61;' in t:
        p.write_text(t.replace('&#x3D;', '=').replace('&#61;', '='), encoding='utf-8')
PY
fi

git add .
if git diff --cached --quiet; then
    echo "nothing to deploy (working tree clean)"
    exit 0
fi

git commit -m "Deploy website $DEPLOY_NUM"

git push origin main
echo "successfully pushed deploy to origin (main)"

git push github main
echo "successfully pushed deploy to github (main)"

echo "Deploy Number $DEPLOY_NUM successfully."

# Notify Bing after deploy
sh "$SCRIPT_DIR/indexnow.sh" || true
