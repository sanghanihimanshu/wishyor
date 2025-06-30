import type { APIRoute } from "astro";

// Generates a more SEO-friendly robots.txt
const getRobotsTxt = () => `
User-agent: *
Disallow: /api/
Disallow: /admin/
Allow: /

Sitemap: https://wishyor.vercel.com/sitemap.xml
Host: your-domain.com
`;

export const GET: APIRoute = () => {
  return new Response(getRobotsTxt().trim(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};
