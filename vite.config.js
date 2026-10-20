import { defineConfig } from 'vite';
import { existsSync } from 'node:fs';
import { resolve } from 'node:path';

// Cloudflare Pages serves /faq and /blog/post for faq.html and blog/post.html,
// so the site links to those clean URLs. Mirror that in dev and preview.
function cleanUrls() {
  const rewrite = (root) => (req, _res, next) => {
    const [path, query = ''] = req.url.split('?');
    const candidate = path.endsWith('/') ? `${path}index.html` : `${path}.html`;
    if (!/\.[a-z0-9]+$/i.test(path) && path !== '/' && existsSync(resolve(root, `.${candidate}`))) {
      req.url = candidate + (query && `?${query}`);
    }
    next();
  };
  return {
    name: 'clean-urls',
    configureServer: (server) => { server.middlewares.use(rewrite(resolve('public'))); },
    configurePreviewServer: (server) => { server.middlewares.use(rewrite(resolve('dist'))); },
  };
}

export default defineConfig({
  base: '/',
  publicDir: 'public',
  plugins: [cleanUrls()],
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
