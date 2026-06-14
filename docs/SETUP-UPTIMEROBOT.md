# ⏰ UptimeRobot Integration - External Keep-Alive (Backup)

## Kenapa UptimeRobot?

Meskipun sudah ada internal Keep-Alive, menggunakan UptimeRobot memberikan:
- ✅ External monitoring (tidak bergantung internal code)
- ✅ Alerts jika bot benar-benar down
- ✅ Statistics & uptime reports
- ✅ Gratis untuk 50 monitors
- ✅ SMS/Email notifications

---

## 🔧 Setup UptimeRobot (Gratis)

### Step 1: Register Account
1. Buka https://uptimerobot.com
2. Sign up dengan email
3. Verify email

### Step 2: Create New Monitor
1. Login ke dashboard
2. Click "Monitors" → "Add New Monitor"
3. Konfigurasi:
   - **Monitor Type**: HTTP(s)
   - **Monitor Name**: `Gang Indo Bot`
   - **URL**: `https://your-app.onrender.com/health`
   - **Monitoring Interval**: 5 minutes (minimum gratis)
   - **Enable Alerts**: Yes

### Step 3: Setup Notifications
1. Go to "My Settings"
2. Add contact:
   - Email untuk alerts
   - Atau webhook untuk automation
3. Test notification

### Step 4: Monitor Dashboard
```
✅ Setup complete!
UptimeRobot akan:
- Ping /health setiap 5 menit
- Kirim alert jika down
- Track uptime percentage
- Show response time
```

---

## 🎯 Monitoring Webhook (Advanced)

### Setup Discord Webhook Alert

```bash
1. Create Discord webhook di server Anda
   - Server Settings → Integrations → Webhooks
   - Copy webhook URL

2. Di UptimeRobot → Alerts → Add new alert contact
   - Contact Type: Custom URL
   - Paste webhook URL
   - Test
```

### Webhook Template
```json
{
  "content": "🔔 **Bot Status Alert**",
  "embeds": [{
    "title": "Gang Indo Bot",
    "description": "Status: *|STATUS|*",
    "fields": [
      {"name": "Response Time", "value": "*|RESPONSE_TIME|*ms"},
      {"name": "Alert #", "value": "*|ALERT_TRANSITION|*"}
    ],
    "color": 16711680
  }]
}
```

---

## 📊 Dashboard Metrics

### Apa yang di-track:
- ✅ Uptime percentage (target: 99%+)
- ✅ Average response time
- ✅ Incident history
- ✅ Downtime alerts

### Monitor Tab:
```
Status: UP ✅
Response Time: ~200ms
Uptime (30 days): 99.5%
Monitors: 1/50 used
```

---

## 🚀 Pro Upgrade (Optional)

Gratis version sudah cukup, tapi upgrade ($9.99/bulan) memberikan:
- Monitoring interval 1 menit (vs 5 menit gratis)
- More alert contacts
- API access
- Custom monitors

---

## ✅ Checklist

- [ ] UptimeRobot account dibuat
- [ ] Monitor ditambahkan
- [ ] Health endpoint tested
- [ ] Notifications disetup
- [ ] Alert emails diterima
- [ ] Dashboard accessible

---

**Kombinasi**: Internal Keep-Alive (4m) + UptimeRobot (5m) = Bot **tidak akan pernah sleep**! 🎉
