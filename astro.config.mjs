// your-new-docs-site/astro.config.mjs

import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  // Your final domain for the site.
  site: 'https://docs.easyscanlate.site',

  markdown: {
      shikiConfig: {
          // Use the same theme as your original site
          theme: 'github-dark',
          // Or a lighter theme like 'github-light'
          // theme: 'github-light',
          wrap: true,
      },
  },

  integrations: [sitemap(), preact()],
});