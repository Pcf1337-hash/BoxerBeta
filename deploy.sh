#!/bin/bash

# Boxerhof Website - Automated Deployment Script
# This script automates the deployment to Vercel

set -e

echo "🚀 Boxerhof Website - Deployment Script"
echo "========================================"
echo ""

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Step 1: Check git
echo "${BLUE}Step 1: Checking git repository...${NC}"
if [ ! -d ".git" ]; then
  echo "❌ Not a git repository. Run 'git init' first."
  exit 1
fi
echo -e "${GREEN}✓ Git repository found${NC}"
echo ""

# Step 2: Check Vercel CLI
echo "${BLUE}Step 2: Checking Vercel CLI...${NC}"
if ! command -v vercel &> /dev/null; then
  echo "ℹ️  Installing Vercel CLI..."
  npm install -g vercel
fi
echo -e "${GREEN}✓ Vercel CLI available${NC}"
echo ""

# Step 3: Git status
echo "${BLUE}Step 3: Git status...${NC}"
if [ -n "$(git status --porcelain)" ]; then
  echo "⚠️  Uncommitted changes detected:"
  git status --short
  read -p "Continue anyway? (y/N) " -n 1 -r
  echo
  if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "❌ Deployment cancelled."
    exit 1
  fi

  echo "Committing changes..."
  git add .
  git commit -m "Pre-deployment commit: $(date +%Y-%m-%d\ %H:%M:%S)"
fi
echo -e "${GREEN}✓ Working directory clean${NC}"
echo ""

# Step 4: Verify .env
echo "${BLUE}Step 4: Checking .env file...${NC}"
if [ ! -f ".env" ]; then
  echo "❌ .env file not found!"
  exit 1
fi
echo -e "${GREEN}✓ .env file exists${NC}"
echo ""

# Step 5: Deploy
echo "${BLUE}Step 5: Deploying to Vercel...${NC}"
echo ""

read -p "Deploy to Production? (y/N) " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
  echo "ℹ️  Deploying to preview..."
  vercel
else
  echo "🚀 Deploying to PRODUCTION..."
  vercel --prod
fi

echo ""
echo -e "${GREEN}✅ Deployment complete!${NC}"
echo ""
echo "Next steps:"
echo "1. Check Vercel Dashboard for deployment status"
echo "2. Test admin panel (/admin) with password: tyson2811"
echo "3. Verify all pages load correctly"
echo "4. Test forms (contact, guestbook)"
echo ""
echo "For issues, check:"
echo "- DEPLOYMENT.md - Full deployment guide"
echo "- DEPLOYMENT_INFO.md - Troubleshooting"
