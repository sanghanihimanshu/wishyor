import { defineConfig, passthroughImageService } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import markdoc from "@astrojs/markdoc";
import keystatic from "@keystatic/astro";
import db from "@astrojs/db";
import svelte from "@astrojs/svelte";
import node from "@astrojs/node";
import mdx from "@astrojs/mdx";
import vercel from "@astrojs/vercel";
import sitemap from "@astrojs/sitemap";

const isVercel = process.env.ASTRO_ADAPTER === "vercel";
const skipKeystatic = !!process.env.SKIP_KEYSTATIC;
const skipAdapter = !!process.env.SKIP_ADAPTER;

export default defineConfig({
  site: "http://localhost:4321",
  base: "/",
  prefetch: true,
  trailingSlash: "never",
  experimental: {
    clientPrerender: true,
  },
  image: {
    service: passthroughImageService(),
    domains: [
      "images.wishyor.com",
      "images.wishyor.dev",
      "images.wishyor.net",
      "images.wishyor.org",
      "images.wishyor.app",
    ],
  },
  integrations: [
    markdoc(),
    mdx(),
    ...(!skipKeystatic ? [keystatic()] : []),
    db(),
    svelte(),
    sitemap({ changefreq: "weekly", priority: 0.7, lastmod: new Date("2022-02-24") }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  output: "server",
  adapter: skipAdapter
    ? vercel()
    : isVercel
      ? vercel({
          edge: true,
          webAnalytics: {
            enabled: true,
            projectId: "wishyor",
            siteId: "wishyor",
          },
          isr: true,
          skewProtection: true,
          runtime: "nodejs18.x",
        })
      : node({
          mode: "standalone",
          output: "server",
          entrypoint: "src/server/index.js",
        }),
});
