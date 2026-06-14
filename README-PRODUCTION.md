# 👨‍💼 Gang Indo Bot - Production Setup v2.0

## 📋 Status: Ready for 24/7 Online

**Last Updated**: 2026-06-14  
**Version**: 2.0.0 (Production)  
**Node**: v18+  
**Status**: ✅ Beta Ready

---

## 🚀 Quick Start

### Local Development
```bash
# Install dependencies
npm install

# Setup environment
cp .env.example .env.production

# Edit .env.production dengan credentials:
# DISCORD_TOKEN=your_token_here
# DISCORD_CLIENT_ID=your_client_id
# DISCORD_GUILD_ID=your_guild_id

# Run development
npm run dev

# Production build
npm run build
npm start
```

### Deploy to Render
```bash
# Push ke production branch
git add .
git commit -m "Production setup v2.0"
git push origin setup/24-7-production

# Di Render dashboard:
# 1. New Web Service
# 2. Connect GitHub
# 3. Set environment variables
# 4. Deploy!
```

---

## ✨ Features

### Bot Management
- ✅ 110+ Slash Commands
- ✅ Virtual KTP Generator
- ✅ Gacha Role System
- ✅ Music Player Integration
- ✅ Ticket Support System
- ✅ Economy & Leveling
- ✅ Auto-Moderation
- ✅ Welcome System
- ✅ Gemini AI Integration

### Dashboard
- ✅ Real-time Statistics
- ✅ Server Analytics
- ✅ Command Library
- ✅ Configuration Manager
- ✅ Citizen Database
- ✅ Gacha Pool Editor
- ✅ Live Console Logs

### Production Features
- ✅ **Keep-Alive Monitor** (4m interval)
- ✅ **Health Endpoints** (/health, /ping)
- ✅ **Graceful Shutdown**
- ✅ **Error Handling**
- ✅ **Memory Monitoring**
- ✅ **Process Management** (Procfile)
- ✅ **Auto-restart** on failure

---

## 🔧 Configuration

### Environment Variables
```bash
# Required
DISCORD_TOKEN=             # Bot token from Discord Developer Portal
DISCORD_CLIENT_ID=         # Client ID
DISCORD_GUILD_ID=          # Server ID

# Optional
NODE_ENV=production        # Environment
PORT=3000                  # Server port
KEEP_ALIVE_ENABLED=true    # Enable keep-alive
GEMINI_API_KEY=            # For AI features
```

### Server Endpoints
```
GET  /                      → Dashboard UI
GET  /health                → Server status & metrics
GET  /ping                  → Simple ping test
POST /api/db/citizens       → Save citizen data
GET  /api/db/citizens       → Get citizen data
GET  /api/bot/status        → Bot status
POST /api/bot/toggle        → Toggle bot online/offline
```

---

## 📊 Keep-Alive System

### How It Works
```
┌─────────────────────────────────────────────────┐
│  Keep-Alive Monitor (Internal)      │
│  Pings /health setiap 4 menit       │
│  Mencegah Render auto-suspend       │
└─────────────────────────────────────────────────┘
          ↓
┌─────────────────────────────────────────────────┐
│  UptimeRobot (External) - Optional   │
│  Backup monitoring setiap 5 menit    │
│  Email alerts jika down              │
└─────────────────────────────────────────────────┘
          ↓
┌─────────────────────────────────────────────────┐
│  Discord Bot                        │
│  Tetap ONLINE 24/7 ✅               │
└─────────────────────────────────────────────────┘
```

### Monitor Logs
```bash
# Internal logs (setiap 4 menit)
✅ [14:32:15] Keep-Alive Ping Success - 245ms - Uptime: 3600.52s
✅ [14:36:15] Keep-Alive Ping Success - 218ms - Uptime: 3840.61s
✅ [14:40:15] Keep-Alive Ping Success - 201ms - Uptime: 4080.45s
```

---

## 📈 Performance Metrics

### Memory Usage (Free Tier)
- Startup: ~150 MB
- Running: ~250-350 MB
- Max: 512 MB (Render limit)

### Response Time
- Dashboard load: ~200-400ms
- API endpoints: ~50-150ms
- Bot commands: <1s

### Uptime Target
- **Free tier with Keep-Alive**: 99%+
- **Pro tier**: 99.9%+

---

## 🛡️ Security

### Implemented
- ✅ Environment variable protection
- ✅ HTTPS only (Render)
- ✅ Token validation
- ✅ Error message sanitization
- ✅ CORS configured
- ✅ Rate limiting ready

### Best Practices
1. Never commit `.env` files
2. Rotate Discord token regularly
3. Use Render's secret management
4. Monitor health endpoints
5. Keep dependencies updated

---

## 🐛 Troubleshooting

### Bot Still Sleeping?
```bash
# Check:
1. Health endpoint responsive?
   curl https://your-app.onrender.com/health

2. Keep-Alive logs in Render?
   Dashboard → Logs → Search 'Keep-Alive'

3. DISCORD_TOKEN valid?
   Verify di Discord Developer Portal
```

### Build Fails?
```bash
# Check dependencies
npm install
npm run lint

# Node version?
npm list
```

### High Memory Usage?
```bash
# Monitor in server.ts health endpoint
# Reduce in-memory caching
# Implement cleanup routines
```

---

## 📚 Documentation

- **Setup Guide**: `docs/DEPLOYMENT.md`
- **UptimeRobot**: `docs/SETUP-UPTIMEROBOT.md`
- **API Docs**: Check `/api` endpoints in `server.ts`
- **Discord.js**: https://discord.js.org

---

## 🎬 Next Steps

1. ✅ **Clone/Pull** branch `setup/24-7-production`
2. ✅ **Setup** environment variables
3. ✅ **Test** locally: `npm run dev`
4. ✅ **Deploy** to Render
5. ✅ **Monitor** health endpoint
6. ✅ **Setup** UptimeRobot (optional)
7. ✅ **Relax** - Bot 24/7 online! 🎉

---

## 📞 Support

**Branch**: `setup/24-7-production`  
**Version**: 2.0.0  
**Status**: Production Ready ✅  
**Last Update**: 2026-06-14

---

**Dibuat dengan ❤️ untuk Gang Indo Bot Community**
