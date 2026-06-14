# Railway.app Deployment Guide - Gang Indo Bot 24/7

## 🚂 Kenapa Railway lebih baik dari Render?

| Fitur | Render Free | Railway Free | Railway Pro |
|-------|------------|-------------|------------|
| Auto-sleep | ✅ (15m) | ❌ | ❌ |
| Monthly free | $5 | **$5** | Unlimited |
| Uptime guarantee | 99% (Keep-Alive) | **99.99%** | 99.99% |
| Database included | ❌ | ✅ PostgreSQL | ✅ |
| Build time | Unlimited | 5 min | 5 min |
| Deployment | Instant | **Instant** | Instant |
| Support | Email | **Discord** | Priority |
| Node memory | 512 MB | **1 GB** | 1+ GB |
| **Perlu Keep-Alive?** | **YA** ⚠️ | **TIDAK** ✅ | **TIDAK** ✅ |

**Verdict**: Railway **jauh lebih baik** untuk bot 24/7! 🎉

---

## 🔧 Setup Railway.app (Rekomendasi!)

### Step 1: Register Railway Account
1. Buka https://railway.app
2. Click **"Start Project"**
3. Login dengan GitHub (recommended)
4. Authorize Railway access ke GitHub

### Step 2: Create New Project
```bash
1. Dashboard Railway → "New Project"
2. Pilih "Deploy from GitHub repo"
3. Select repo: PembuatWebIndonesia/Gang-indo-botwkw
4. Pilih branch: setup/24-7-production
```

### Step 3: Configure Service
```bash
# Railway auto-detect Node.js project
# Tapi kita perlu customize:

1. Klik service "gang-indo-bot"
2. Go to "Settings"
3. Set Build Command:
   npm install && npm run build

4. Set Start Command:
   npm start

5. Set Environment:
   NODE_ENV=production
```

### Step 4: Add Environment Variables
Di Railway dashboard:
```bash
# Variables tab → Add Variable

DISCORD_TOKEN=YOUR_BOT_TOKEN
DISCORD_CLIENT_ID=YOUR_CLIENT_ID
DISCORD_GUILD_ID=YOUR_GUILD_ID
NODE_ENV=production
PORT=3000
```

### Step 5: Generate Railway Domain
```bash
# Railway otomatis generate domain:
https://[project-name]-production.up.railway.app

# Copy URL ini untuk health check
```

### Step 6: Deploy!
```bash
1. Click "Deploy"
2. Railroad akan build & deploy otomatis
3. Tunggu ~2-3 menit
4. Service status berubah ke "Running" ✅
```

---

## 🎯 Railway vs Keep-Alive

### Railway **TIDAK perlu** Keep-Alive:

**Alasan:**
- ✅ Tidak ada auto-sleep mechanism
- ✅ Always-on infrastructure
- ✅ No idle timeout
- ✅ $5/bulan sudah cukup untuk bot 24/7

### Keep-Alive hanya jika Render:
- Render free tier = auto-sleep 15 menit
- Perlu Keep-Alive untuk ping server
- UptimeRobot sebagai backup

---

## 📊 Railway Monitoring

### Real-time Logs
```bash
# Dashboard → Logs tab
# Semua console.log otomatis ter-capture

✅ [14:32:15] Gang Indo Bot Dashboard Started!
🔗 Server Running on: http://0.0.0.0:3000
✅ Keep-Alive Monitor Started (jika diperlukan)
```

### Metrics Tab
```bash
# Monitor:
- CPU usage
- Memory usage
- Network I/O
- Deployment history
```

### Health Check
```bash
# Test endpoint:
curl https://your-railway-app.up.railway.app/health

Response:
{
  "status": "OK",
  "uptime": 3600,
  "memory": { ... }
}
```

---

## 🗄️ Database Integration (Railway)

### Add PostgreSQL Database
```bash
1. Dashboard → "+ New"
2. Select "PostgreSQL"
3. Railway auto-setup database
4. Copy connection string:
   DATABASE_URL=postgresql://...
```

### Add MongoDB (Optional)
```bash
1. Dashboard → "+ New"
2. Select "MongoDB"
3. Auto-provision cluster
4. Get connection string
```

---

## 🔑 Discord Bot Credentials

### Get Discord Token
1. Buka https://discord.com/developers/applications
2. Create New Application → "Gang Indo Bot"
3. Go to "Bot" tab
4. Click "Add Bot"
5. Copy token → Paste di Railway `DISCORD_TOKEN`

### OAuth2 Invite Link
```bash
# Di OAuth2 → URL Generator
# Scopes: bot + applications.commands
# Permissions: Administrator (8)

# Generated URL:
https://discord.com/api/oauth2/authorize?client_id=YOUR_CLIENT_ID&permissions=8&scope=bot%20applications.commands
```

---

## 💰 Railway Pricing

### Free Tier ($0)
- **$5/month free credits**
- Cukup untuk:
  - 1 Node.js app
  - 1 Database
  - Bandwidth unlimited
- **NO auto-suspend** ✅

### Paid ($5+/month)
- Unlimited credits
- Priority support
- Custom domains
- Better performance

**Budget-friendly**: Gratis dulu, upgrade nanti kalau perlu!

---

## 🚀 Auto-Deploy Setup

### GitHub Integration (Automatic)
```bash
# Railway auto-deploy saat push ke branch:

1. Push ke setup/24-7-production
2. Railway detects changes
3. Auto-build & auto-deploy
4. Deployment history tracked
```

### Manual Deploy
```bash
# Jika perlu trigger manual:
1. Railway dashboard → Service
2. Click "Redeploy"
3. Select commit
4. Deploy!
```

---

## 🛡️ Railway Security

### Environment Variables (Encrypted)
```bash
# Semua secrets encrypted at rest
# Safe untuk:
- Discord tokens
- Database passwords
- API keys
```

### Network Security
```bash
# Railway provides:
- HTTPS by default
- DDoS protection
- Firewall rules
- Private networking
```

### Best Practices
```bash
1. Never push .env files
2. Rotate tokens regularly
3. Use Railway's secret management
4. Monitor access logs
5. Enable 2FA on Railway account
```

---

## 🆘 Troubleshooting Railway

### Deployment Failed
```bash
# Check logs:
1. Dashboard → Service → Logs
2. Search for "error"
3. Read error message
4. Common issues:
   - npm install fails → Check package.json
   - Build fails → Check build command
   - Start fails → Check start command
```

### Bot Not Responding
```bash
# Debug steps:
1. Check health endpoint:
   curl https://your-app.up.railway.app/health

2. Check Discord token valid
   
3. Check logs for errors

4. Restart service:
   Dashboard → Service → Restart
```

### High Memory Usage
```bash
# Monitor → Memory tab
# Kalau > 500MB:
- Reduce caching
- Implement cleanup
- Optimize dependencies
```

---

## 📚 Migration dari Render ke Railway

### Steps:
```bash
1. Create Railway account
2. Deploy setup/24-7-production branch
3. Add environment variables
4. Test health endpoint
5. Point Discord webhook ke Railway URL
6. Monitor for 24 hours
7. Delete Render service (if happy)
```

### Zero Downtime?
```bash
# Jika sudah live di Render:

1. Deploy ke Railway dulu
2. Test semuanya
3. Update DNS/webhook
4. Keep Render running 48h lebih
5. Then delete Render
```

---

## ✅ Railway Final Checklist

- [ ] Railway account dibuat
- [ ] GitHub connected
- [ ] Repository deployed
- [ ] Environment variables tersetting
- [ ] Build successful
- [ ] Service running
- [ ] Health endpoint responsive
- [ ] Discord token valid
- [ ] Bot responding in Discord
- [ ] Logs are clean
- [ ] Monitoring setup
- [ ] Alerts configured (optional)

---

## 🎉 Bonus: Railway Features

### Railway Deployments
```bash
# Every git push = automatic deployment
# Rollback ke versi lama in 1 click
# Deployment history fully tracked
```

### Railway CLI (Advanced)
```bash
# Install:
npm install -g @railway/cli

# Login:
railway login

# Link project:
railway link

# Deploy:
railway up

# View logs:
railway logs
```

### Custom Domain (Pro)
```bash
# Add custom domain:
1. Railway dashboard → Settings
2. Domains → Add custom domain
3. Point DNS to Railway
4. Done! HTTPS automatic
```

---

## 📞 Railway Support

- **Documentation**: https://docs.railway.app
- **Discord Community**: https://railway.app/discord
- **Email Support**: support@railway.app
- **Status Page**: https://status.railway.app

---

## 🏁 Summary

**Railway** adalah pilihan **TERBAIK** untuk Gang Indo Bot:
- ✅ 24/7 always-on (tidak perlu Keep-Alive)
- ✅ $5/bulan free tier
- ✅ Built-in database
- ✅ 1GB RAM (vs 512MB Render)
- ✅ Instant deployment
- ✅ Great community support
- ✅ Modern infrastructure

**Rekomendasi**: Pakai Railway! 🚂

---

**Created**: 2026-06-14  
**Version**: 1.0.0  
**Status**: ✅ Railway Ready!
