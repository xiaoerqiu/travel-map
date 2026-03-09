import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: '0.0.0.0', // 监听所有以太网卡，以支持容器部署
    port: parseInt(process.env.PORT) || 8080,
  },
  preview: {
    host: '0.0.0.0',
    port: parseInt(process.env.PORT) || 8080,
  }
});
