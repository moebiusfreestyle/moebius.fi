// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { satteri, satteriHeadingIdsPlugin } from '@astrojs/markdown-satteri';
import tables from './src/lib/tables-plugin.mjs';
import headingAnchors from './src/lib/heading-anchors-plugin.mjs';

export default defineConfig({
  site: 'https://moebius.fi',
  integrations: [mdx(), sitemap()],
  // Astro adds heading ids after our plugins; headingAnchors needs them earlier.
  markdown: { processor: satteri({ hastPlugins: [tables, satteriHeadingIdsPlugin(), headingAnchors] }) },
});
