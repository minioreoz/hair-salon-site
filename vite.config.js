import { defineConfig } from 'vite';

export default defineConfig({
  base: '/',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    minify: 'esbuild',
    cssMinify: true,
    rollupOptions: {
      input: 'index.html',
    },
  },
  server: {
    open: true,
  },
});