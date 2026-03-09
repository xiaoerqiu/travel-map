import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: '0.0.0.0', // 监听所有以太网卡，以支持容器部署
    port: process.env.PORT || 3000,
  },
  preview: {
    host: '0.0.0.0',
    port: process.env.PORT || 3000,
  }
});
