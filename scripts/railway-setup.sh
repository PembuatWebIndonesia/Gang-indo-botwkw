#!/bin/bash
# Railway deployment helper script

echo "🚂 Railway Deployment Helper"
echo "============================="
echo ""

# Check if railway CLI is installed
if ! command -v railway &> /dev/null; then
    echo "📥 Installing Railway CLI..."
    npm install -g @railway/cli
fi

# Login to Railway
echo "🔐 Logging in to Railway..."
railway login

echo ""
echo "✅ Railway CLI setup complete!"
echo ""
echo "Next steps:"
echo "1. Go to: https://railway.app/new"
echo "2. Deploy from GitHub: PembuatWebIndonesia/Gang-indo-botwkw"
echo "3. Select branch: setup/24-7-production"
echo "4. Add environment variables"
echo "5. Deploy!"
echo ""
echo "Or use CLI:"
echo "  railway link"
echo "  railway up"
echo ""
echo "📚 Docs: https://docs.railway.app"
