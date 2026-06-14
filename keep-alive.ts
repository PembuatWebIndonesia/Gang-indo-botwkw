import axios from 'axios';

const KEEP_ALIVE_INTERVAL = 4 * 60 * 1000; // 4 menit
const APP_URL = process.env.RENDER_EXTERNAL_HOSTNAME 
  ? `https://${process.env.RENDER_EXTERNAL_HOSTNAME}`
  : process.env.APP_URL || 'http://localhost:3000';

let keepAliveActive = false;

export function startKeepAlive() {
  if (keepAliveActive) return;
  keepAliveActive = true;

  console.log(`\n🔄 Keep-Alive Monitor Started`);
  console.log(`📋 Monitoring URL: ${APP_URL}`);
  console.log(`⏱️  Interval: ${KEEP_ALIVE_INTERVAL / 1000 / 60} menit\n`);

  const pingServer = async () => {
    try {
      const startTime = Date.now();
      const response = await axios.get(`${APP_URL}/health`, {
        timeout: 10000,
        validateStatus: () => true
      });
      const duration = Date.now() - startTime;

      if (response.status === 200) {
        const timestamp = new Date().toLocaleTimeString('id-ID');
        console.log(`✅ [${timestamp}] Keep-Alive Ping Success - ${duration}ms - Uptime: ${response.data.uptime?.toFixed(2)}s`);
      } else {
        console.warn(`⚠️  [${new Date().toLocaleTimeString('id-ID')}] Status: ${response.status}`);
      }
    } catch (error: any) {
      console.error(`❌ [${new Date().toLocaleTimeString('id-ID')}] Keep-Alive Ping Failed:`, error.message);
    }
  };

  // First ping immediately
  pingServer();

  // Then ping every interval
  setInterval(pingServer, KEEP_ALIVE_INTERVAL);
}

export function stopKeepAlive() {
  keepAliveActive = false;
  console.log('⏹️  Keep-Alive Monitor Stopped');
}
