import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '/api'),
      },
          '/sub': {
               target: 'http://localhost:8080',
               changeOrigin: true,
               rewrite: (path) => path.replace(/^\/sub/, '/sub'),
           },
    },
  },
});
