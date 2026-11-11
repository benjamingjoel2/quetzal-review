// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://quetzalreview.tourground.com',
  trailingSlash: 'always',
  build: { format: 'directory', inlineStylesheets: 'always' },
  compressHTML: true,
  prefetch: false,
  markdown: { smartypants: true },
});
