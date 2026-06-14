import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { Client, IntentsBitField, ChannelType } from 'discord.js';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;
const TOKEN = process.env.DISCORD_TOKEN || '';

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, 'dist')));

// Health check endpoint - Critical untuk Keep-Alive
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    memory: process.memoryUsage()
  });
});

// Keep-alive ping endpoint
app.get('/ping', (req, res) => {
  res.status(200).send('PONG');
});

// API endpoints untuk Database
app.post('/api/db/citizens', (req, res) => {
  try {
    const data = req.body;
    console.log('[DB] Menyimpan data warga:', data.length, 'records');
    res.json({ success: true, message: 'Data warga disimpan' });
  } catch (err) {
    console.error('[DB ERROR]', err);
    res.status(500).json({ success: false, error: String(err) });
  }
});

app.get('/api/db/citizens', (req, res) => {
  res.json([
    {
      id: '6704023211059722',
      userId: '1423089077032321105',
      username: 'vallensr1204',
      fullname: 'Jiyaaa',
      gender: 'Perempuan',
      address: 'Bandung',
      religion: 'Islam',
      hobby: 'Gaming dan nonton',
      avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120'
    }
  ]);
});

app.post('/api/db/gacha-roles', (req, res) => {
  res.json({ success: true });
});

app.get('/api/db/gacha-roles', (req, res) => {
  res.json([]);
});

app.post('/api/db/bot-config', (req, res) => {
  res.json({ success: true });
});

app.get('/api/db/bot-config', (req, res) => {
  res.json({ token: '', clientId: '', guildId: '' });
});

// Bot Status endpoint
app.get('/api/bot/status', (req, res) => {
  res.json({
    status: 'ONLINE',
    isReal: !!TOKEN,
    serverCount: 0,
    memberCount: 0,
    ping: 0,
    channels: 0,
    uptime: process.uptime()
  });
});

app.post('/api/bot/toggle', (req, res) => {
  const { status } = req.body;
  res.json({ status, success: true });
});

// Serve React app untuk routes lainnya
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Error handling middleware
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error('[ERROR]', err);
  res.status(500).json({ error: 'Internal Server Error' });
});

// Start server
const server = app.listen(PORT, '0.0.0.0', () => {
  console.log(`\n${'='.repeat(60)}`);
  console.log(`✅ Gang Indo Bot Dashboard Started!`);
  console.log(`📡 Server Running on: http://0.0.0.0:${PORT}`);
  console.log(`🌐 Public URL: https://${process.env.RENDER_EXTERNAL_HOSTNAME || 'localhost'}`);
  console.log(`⏰ Uptime: ${new Date().toISOString()}`);
  console.log(`${'='.repeat(60)}\n`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('\n[SHUTDOWN] SIGTERM signal received: closing HTTP server');
  server.close(() => {
    console.log('✅ HTTP server closed');
    process.exit(0);
  });
});

// Handle uncaught exceptions
process.on('uncaughtException', (err) => {
  console.error('[FATAL ERROR]', err);
  process.exit(1);
});

export default app;
