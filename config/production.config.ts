export const productionConfig = {
  // Server
  port: parseInt(process.env.PORT || '3000'),
  nodeEnv: process.env.NODE_ENV || 'production',
  hostname: '0.0.0.0',

  // Keep-Alive
  keepAlive: {
    enabled: process.env.KEEP_ALIVE_ENABLED !== 'false',
    interval: parseInt(process.env.KEEP_ALIVE_INTERVAL || '240000'), // 4 menit
    timeout: 10000,
    retries: 3
  },

  // Discord
  discord: {
    token: process.env.DISCORD_TOKEN || '',
    clientId: process.env.DISCORD_CLIENT_ID || '',
    guildId: process.env.DISCORD_GUILD_ID || '',
    intents: [
      'GuildMessages',
      'DirectMessages',
      'Guilds',
      'GuildMembers',
      'MessageContent',
      'GuildPresences'
    ]
  },

  // Render
  render: {
    externalHostname: process.env.RENDER_EXTERNAL_HOSTNAME || '',
    region: 'oregon' // Default Render region
  },

  // Logging
  logging: {
    level: 'info',
    format: 'json'
  },

  // Performance
  performance: {
    maxConnections: 100,
    requestTimeout: 30000,
    memoryLimit: 512 // MB
  }
};

export type ProductionConfig = typeof productionConfig;
