#!/bin/bash

echo "🔍 Verifying Boxerhof Website Setup..."
echo "======================================"
echo ""

# Colors
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

check_file() {
  if [ -f "$1" ]; then
    echo -e "${GREEN}✓${NC} $1"
    return 0
  else
    echo -e "${RED}✗${NC} $1 (missing)"
    return 1
  fi
}

check_dir() {
  if [ -d "$1" ]; then
    echo -e "${GREEN}✓${NC} $1"
    return 0
  else
    echo -e "${RED}✗${NC} $1 (missing)"
    return 1
  fi
}

echo "📁 Checking file structure..."
check_file "README.md"
check_file "DEPLOYMENT.md"
check_file "FEATURES.md"
check_file "QUICKSTART.md"
check_file "IMPLEMENTATION_SUMMARY.md"
check_file ".env"
check_file ".gitignore"
check_dir "web/src/app/admin"
check_dir "web/src/app/galerie"
check_dir "web/src/app/neuigkeiten"
check_dir "web/src/app/gaestebuch"
check_dir "web/src/components"

echo ""
echo "📄 Checking new pages..."
check_file "web/src/app/impressum/page.jsx"
check_file "web/src/app/datenschutz/page.jsx"

echo ""
echo "⚙️  Checking environment variables..."
if grep -q "ADMIN_PASSWORD" .env; then
  echo -e "${GREEN}✓${NC} ADMIN_PASSWORD configured"
else
  echo -e "${RED}✗${NC} ADMIN_PASSWORD not found in .env"
fi

if grep -q "DATABASE_URL" .env; then
  echo -e "${GREEN}✓${NC} DATABASE_URL configured"
else
  echo -e "${RED}✗${NC} DATABASE_URL not found in .env"
fi

echo ""
echo "📦 Checking dependencies..."
if [ -d "web/node_modules" ]; then
  echo -e "${GREEN}✓${NC} node_modules directory exists"
else
  echo -e "${YELLOW}⚠${NC} node_modules not installed (run: npm install --legacy-peer-deps)"
fi

echo ""
echo "✨ Verification complete!"
echo ""
echo "Next steps:"
echo "1. npm install --legacy-peer-deps (if needed)"
echo "2. npm run dev (to test locally)"
echo "3. Follow DEPLOYMENT.md to deploy to Vercel"
