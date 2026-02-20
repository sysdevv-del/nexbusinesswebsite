const express = require("express");
const router = express.Router();

// XML Sitemap Generator
router.get("/sitemap.xml", async (req, res) => {
    const baseUrl = "https://nexbusiness.id";
    const today = new Date().toISOString().split("T")[0];

    // Static pages
    const staticPages = [
        { url: "/", priority: "1.0", changefreq: "weekly" },
        { url: "/apps", priority: "0.9", changefreq: "weekly" },
        { url: "/pricing", priority: "0.8", changefreq: "monthly" },
        { url: "/about", priority: "0.7", changefreq: "monthly" },
        { url: "/contact", priority: "0.7", changefreq: "monthly" },
        { url: "/blog", priority: "0.8", changefreq: "daily" },
        { url: "/privacy", priority: "0.3", changefreq: "yearly" },
        { url: "/terms", priority: "0.3", changefreq: "yearly" },
        { url: "/cookies", priority: "0.3", changefreq: "yearly" },
    ];

    let dynamicPages = [];

    // Try to get dynamic app pages
    try {
        const db = require("../db");
        const appsResult = await db.query("SELECT slug FROM apps ORDER BY name");
        dynamicPages = appsResult.rows.map((app) => ({
            url: `/apps/${app.slug}`,
            priority: "0.6",
            changefreq: "monthly",
        }));

        // Try to get blog post pages
        const blogResult = await db.query(
            "SELECT slug, updated_at FROM blog_posts WHERE published = true ORDER BY created_at DESC"
        );
        blogResult.rows.forEach((post) => {
            dynamicPages.push({
                url: `/blog/${post.slug}`,
                priority: "0.5",
                changefreq: "monthly",
                lastmod: post.updated_at
                    ? new Date(post.updated_at).toISOString().split("T")[0]
                    : today,
            });
        });
    } catch (err) {
        // If DB is not available, just use static pages
        console.log("Sitemap: Could not fetch dynamic pages from DB");
    }

    const allPages = [...staticPages, ...dynamicPages];

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
            .map(
                (page) => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${page.lastmod || today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
            )
            .join("\n")}
</urlset>`;

    res.header("Content-Type", "application/xml");
    res.send(xml);
});

// Robots.txt (enhanced)
router.get("/robots.txt", (req, res) => {
    const baseUrl = "https://nexbusiness.id";
    const robotsTxt = `User-agent: *
Allow: /
Disallow: /admin/
Disallow: /admin/*
Disallow: /api/

Sitemap: ${baseUrl}/sitemap.xml
`;
    res.header("Content-Type", "text/plain");
    res.send(robotsTxt);
});

module.exports = router;
