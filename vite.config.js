import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: '0.0.0.0', // 监听所有以太网卡，以支持容器部署
    port: parseInt(process.env.PORT) || 8080,
    allowedHosts: true // 允许所有外部域名访问 (Railway)
  },
  preview: {
    host: '0.0.0.0',
    port: parseInt(process.env.PORT) || 8080,
    allowedHosts: true // 允许所有外部域名访问 (Railway)
  }
});
