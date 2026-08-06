// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// https://astro.build/config
// Deployment configuration for GitHub Pages
export default defineConfig({
  site: 'https://thuctran112.github.io',
  integrations: [mdx()]
});
