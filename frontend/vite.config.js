import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Arcana-Game/',   
  plugins: [react()],
  server: {
    historyApiFallback: true,
  },
});
