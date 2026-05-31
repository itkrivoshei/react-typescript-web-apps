import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  base: '/react-typescript-web-apps/',
  plugins: [
    react(),
    svgr({
      include: '**/*.svg?react',
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) {
            return;
          }
          if (
            id.includes('@mui/') ||
            id.includes('@emotion/') ||
            id.includes('@popperjs/')
          ) {
            return 'mui';
          }
          if (id.includes('@chakra-ui/') || id.includes('@ark-ui/')) {
            return 'chakra';
          }
          if (
            id.includes('react') ||
            id.includes('react-dom') ||
            id.includes('react-router-dom') ||
            id.includes('react-redux') ||
            id.includes('@reduxjs/')
          ) {
            return 'react-vendor';
          }

          return 'vendor';
        },
      },
    },
  },
});
