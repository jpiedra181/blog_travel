// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	integrations: [mdx(), sitemap()],
	site: 'https://jpiedra181.github.io',
  	base: 'blog_travel',
});
