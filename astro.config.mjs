import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/static";
import sitemap from "@astrojs/sitemap";
import prefetch from "@astrojs/prefetch";
import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  output: 'static',
  adapter: vercel({
    analytics: true
  }),
  integrations: [tailwind(), sitemap(), prefetch(), svelte()]
});