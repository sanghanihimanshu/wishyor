// @ts-check
import { defineConfig,passthroughImageService } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import vercel from "@astrojs/vercel";
// import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";
import keystatic from "@keystatic/astro";
import db from "@astrojs/db";
import svelte from "@astrojs/svelte";
// import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  site: "https://wishyor.vercel.app",
  prefetch: true,
  trailingSlash: "never",
  experimental: {
    clientPrerender: true,
   responsiveImages: true,
  },
  image:{
    service: passthroughImageService(),
    domains:["images.wishyor.com","images.wishyor.dev","images.wishyor.net","images.wishyor.org","images.wishyor.app"],
  },
  integrations: [
    // react(),
    markdoc(),
    ...(process.env.SKIP_KEYSTATIC ? [] : [keystatic()]),
    db(),
    svelte(),
  ],
  vite: {
    // @ts-ignore
    plugins: [tailwindcss()],
  },
  output: "server",
    adapter: vercel()
});
