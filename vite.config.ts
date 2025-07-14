import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/aylin-dev/', // ← Add this line (matches your repository name)
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    outDir: 'docs', // ← Optional: Builds to docs folder instead of dist
  },
});
