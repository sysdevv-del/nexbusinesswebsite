const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const path = require("path");
require("dotenv").config();

const appsRouter = require("./routes/apps");
const blogRouter = require("./routes/blog");
const contactRouter = require("./routes/contact");
const seoRouter = require("./routes/seo");

const app = express();
const PORT = process.env.PORT || 5002;

app.use(cors({
  origin: process.env.NODE_ENV === "production"
    ? ["https://nexbusiness.id", "https://www.nexbusiness.id"]
    : true,
  credentials: true,
}));
app.use(helmet({
  contentSecurityPolicy: false,
  crossOriginEmbedderPolicy: false,
}));
app.use(express.json());

app.use((req, res, next) => {
  res.set("Cache-Control", "no-cache, no-store, must-revalidate");
  next();
});

app.use("/api", appsRouter);
app.use("/api", blogRouter);
app.use("/api", contactRouter);
app.use("/", seoRouter);

if (process.env.NODE_ENV === "production") {
  const publicPath = path.join(__dirname, "..", "dist", "public");
  app.use(express.static(publicPath));
  app.get("*", (req, res, next) => {
    // Don't serve index.html for API or SEO routes
    if (req.path.startsWith("/api") || req.path === "/sitemap.xml" || req.path === "/robots.txt") {
      return next();
    }
    res.sendFile(path.join(publicPath, "index.html"));
  });
}

// Global error handler
app.use((err, req, res, _next) => {
  console.error("Unhandled error:", err);
  res.status(500).json({ error: "Internal server error" });
});

if (require.main === module) {
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;

