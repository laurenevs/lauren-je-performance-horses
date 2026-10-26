import { defineConfig } from 'astro/config';

// Builds into ../ux so the existing GitHub Pages site serves it at laurenloveshorses.com/ux
export default defineConfig({
  site: 'https://laurenloveshorses.com',
  base: '/ux',
  outDir: '../ux',
  trailingSlash: 'always',
  build: { assets: 'assets', inlineStylesheets: 'always' },
});
