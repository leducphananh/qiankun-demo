import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import qiankun from 'vite-plugin-qiankun';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (qiankun as any)('user-app', {
      useDevMode: true,
    }),
  ],

  server: {
    port: 5174,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
});
