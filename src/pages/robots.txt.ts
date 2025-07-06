import type { APIRoute } from "astro";

const getRobotsTxt = () => `# robots.txt for Wishyor Technologies
# Publisher: Wishyor Technologies
# Website: https://www.wishyor.com
# Maintainer: SEO Team <seo@wishyor.com>
# Generated automatically by Astro API Route
# Last updated: ${new Date().toISOString().split("T")[0]}

# ------------------------
# Default Rules for All Bots
# ------------------------
User-agent: *
Allow: /
Disallow: /private/
Disallow: /admin/
Disallow: /api/
Disallow: /*.json$
Disallow: /*?*

# ------------------------
# Specific Bots
# ------------------------

# Googlebot (Google Search)
User-agent: Googlebot
Allow: /

# Bingbot (Microsoft Search)
User-agent: Bingbot
Allow: /

# Baiduspider (Chinese Search)
User-agent: Baiduspider
Crawl-delay: 10

Host: www.wishyor.com
Host: www.wishyor.vercel.app
# ------------------------
# Additional Directives
# ------------------------
# This file is generated automatically. Do not edit manually.
# For any changes, please contact the SEO team at seo@wishyor.com
`;

export const GET: APIRoute = ({site}) => {
  const sitemapURL = new URL('sitemap-index.xml', site);
  const robotsContent = getRobotsTxt(sitemapURL);
  const encoded = new TextEncoder().encode(robotsContent);

  return new Response(robotsContent, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
      "Content-Length": encoded.length.toString(),
    },
  });
};
