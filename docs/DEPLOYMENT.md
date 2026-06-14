# 🚀 Deployment Guide - Gang Indo Bot 24/7 Online

## ✅ Solusi Masalah Bot Stop di Render.com

Render.com free tier memiliki keterbatasan:
- **Auto-suspend** jika idle 15 menit tanpa request
- **Memory limit** 512 MB
- **Request timeout** 30 detik
- **Rebuilds otomatis** saat deploy

### Solusi yang Kami Implementasikan:

1. **Keep-Alive Monitor** ⏱️
   - Ping otomatis setiap 4 menit
   - Mencegah idle suspension
   - Health check endpoint

2. **Procfile Configuration** 📋
   - `web` process untuk dashboard
   - `worker` process untuk bot
   - Load balancing optimal

3. **Health Check Endpoint** 🏥
   - `/health` - Status lengkap server
   - `/ping` - Simple ping test
   - Memory monitoring

4. **Graceful Shutdown** ✋
   - Proper signal handling
   - Clean connection closure
   - Error recovery

---

## 🔧 Setup di Render.com

### Step 1: Connect GitHub Repository
```bash
# Push ke branch main atau production
git push origin setup/24-7-production
```

### Step 2: Create Web Service di Render
1. Buka https://dashboard.render.com
2. Click "New +" → "Web Service"
3. Connect GitHub repo: `PembuatWebIndonesia/Gang-indo-botwkw`
4. Pilih branch: `setup/24-7-production`
5. Konfigurasi:
   - **Name**: `gang-indo-bot`
   - **Environment**: `Node`
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
   - **Plan**: `Free` (bisa upgrade nanti)

### Step 3: Environment Variables
Di Render dashboard, tambah di "Environment":
```
DISCORD_TOKEN=YOUR_BOT_TOKEN_HERE
DISCORD_CLIENT_ID=YOUR_CLIENT_ID
DISCORD_GUILD_ID=YOUR_GUILD_ID
NODE_ENV=production
KEEP_ALIVE_ENABLED=true
```

### Step 4: Deploy
```bash
git push origin setup/24-7-production
# Render akan auto-deploy
```

---

## 📊 Monitoring

### Check Server Status
```bash
# Health endpoint
curl https://your-app.onrender.com/health

# Response:
{
  "status": "OK",
  "uptime": 3600,
  "memory": { ... }
}
```

### View Logs
```bash
# Di Render dashboard → Logs
# Lihat Keep-Alive pings setiap 4 menit
```

---

## 🛡️ Best Practices Production

### 1. Database Persistence
```bash
# Gunakan MongoDB Atlas gratis untuk data
# Environment: MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/db
```

### 2. Error Monitoring
```bash
# Setup Sentry untuk error tracking
# Environment: SENTRY_DSN=your_sentry_url
```

### 3. Scaling Strategy
```
Free → Pro ($12/bulan)
- 512 MB RAM → 1 GB RAM
- Auto-sleep disabled
- Better performance
```

### 4. Backup Strategy
```bash
# Auto-backup data setiap 24 jam
# Upload ke GitHub/Google Drive
```

---

## 🚨 Troubleshooting

### Bot Still Stopping?
```bash
# Check logs di Render
# Lihat error pada /health endpoint
# Verify DISCORD_TOKEN valid
```

### Memory Issues?
```bash
# Di server.ts, optimize:
- Reduce in-memory caching
- Implement garbage collection
- Monitor memory usage
```

### Deploy Gagal?
```bash
# Check build logs
# Pastikan npm dependencies OK
# Verify Node version: v18+
```

---

## 📈 Upgrade Path

### Dari Free ke Production:

| Aspek | Free | Starter ($7) | Professional ($29) |
|-------|------|-------------|-------------------|
| Auto-sleep | ✅ (15m) | ❌ | ❌ |
| Memory | 512 MB | 1 GB | 4 GB |
| vCPU | Shared | Shared | Dedicated |
| 24/7 Online | ⚠️ (Keep-Alive) | ✅ | ✅ |
| Disk | 100 MB | 1 GB | 10 GB |
| Harga/bulan | Free | $7 | $29 |

**Rekomendasi**: Upgrade ke Starter ($7) setelah testing, mendapat 24/7 guaranteed uptime tanpa perlu Keep-Alive.

---

## 🔐 Security Checklist

- [ ] Discord token tidak di-commit ke repo
- [ ] Environment variables sudah tersetting
- [ ] Health endpoint protected (opsional)
- [ ] Rate limiting aktif
- [ ] Error messages tidak expose data sensitif
- [ ] HTTPS enforced (otomatis di Render)

---

## 📞 Support & Resources

- **Render Docs**: https://render.com/docs
- **Discord.js**: https://discord.js.org
- **Keep-Alive Tutorial**: Lihat `keep-alive.ts`
- **Status Monitoring**: https://render.com/status

---

**Created**: 2026-06-14  
**Version**: 1.0.0  
**Status**: ✅ Production Ready
