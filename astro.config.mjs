import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/static";
import sitemap from "@astrojs/sitemap";
import prefetch from "@astrojs/prefetch";
import svelte from "@astrojs/svelte";
import compress from "astro-compress";
import serviceWorker from "astrojs-service-worker";
import { astroImageTools } from "astro-imagetools";

// https://astro.build/config
export default defineConfig({
  site: "https://veroniqueorocorp.com",
  output: "static",
  adapter: vercel({
    analytics: true
  }),
  integrations: [
    tailwind(),
    sitemap(),
    prefetch(),
    svelte(),
    compress(),
    serviceWorker(),
    astroImageTools
  ]
});
