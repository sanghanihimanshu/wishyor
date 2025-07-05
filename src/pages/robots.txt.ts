import type { APIRoute } from "astro";

// Generates a more SEO-friendly robots.txt
const getRobotsTxt = () => `
User-agent: *
Disallow: /api/
Disallow: /admin/
Allow: /

Sitemap: https://wishyor.com/sitemap.xml
Host: wishyor.com
Crawl-delay: 5
`;

export const GET: APIRoute = () => {
  return new Response(getRobotsTxt().trim(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};
