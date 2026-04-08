import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: true, // This makes it listen on all network interfaces
    port: 8065,
    proxy: {
      '/api': {
        target: 'http://180.235.121.253:8061',
        changeOrigin: true,
      }
    }
  }
});
