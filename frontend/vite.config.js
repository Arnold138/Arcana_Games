import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Arcana_Games/', // Assurez-vous que c'est le bon nom de votre repository
  plugins: [react()],
  publicDir: 'public', // Ajoutez cette ligne pour que Vite copie le dossier public
  build: {
    outDir: 'dist', // Dossier de sortie (par défaut mais explicite)
    assetsDir: 'assets', // Dossier pour les assets
  },
  server: {
    historyApiFallback: true,
  },
});