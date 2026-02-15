const express = require("express");
const router = express.Router();
const pool = require("../db");
const adminAuth = require("../middleware/adminAuth");

router.post("/auth/admin/login", async (req, res) => {
  try {
    const { password } = req.body;
    if (!password || password !== process.env.ADMIN_PASSWORD) {
      return res.status(401).json({ error: "Invalid credentials" });
    }
    res.json({ token: process.env.ADMIN_TOKEN });
  } catch (error) {
    console.error("Error during admin login:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/blog", async (req, res) => {
  try {
    const { category } = req.query;
    let query = "SELECT * FROM blog_posts WHERE status = 'published'";
    const params = [];
    if (category) {
      params.push(category);
      query += ` AND category = $${params.length}`;
    }
    query += " ORDER BY created_at DESC";
    const result = await pool.query(query, params);
    res.json(result.rows);
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/blog/admin/all", adminAuth, async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM blog_posts ORDER BY created_at DESC");
    res.json(result.rows);
  } catch (error) {
    console.error("Error fetching all blog posts:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/blog/:slug", async (req, res) => {
  try {
    const { slug } = req.params;
    const result = await pool.query(
      "SELECT * FROM blog_posts WHERE slug = $1 AND status = 'published'",
      [slug]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Blog post not found" });
    }
    res.json(result.rows[0]);
  } catch (error) {
    console.error("Error fetching blog post:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.post("/blog", adminAuth, async (req, res) => {
  try {
    const { title, excerpt, content, category, author, cover_image, read_time, status } = req.body;
    if (!title || !content) {
      return res.status(400).json({ error: "Title and content are required" });
    }
    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");
    const result = await pool.query(
      `INSERT INTO blog_posts (title, slug, excerpt, content, category, author, cover_image, read_time, status)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
       RETURNING *`,
      [title, slug, excerpt, content, category, author, cover_image, read_time, status || "draft"]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error("Error creating blog post:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.put("/blog/:id", adminAuth, async (req, res) => {
  try {
    const { id } = req.params;
    const { title, slug, excerpt, content, category, author, cover_image, read_time, status } = req.body;
    const result = await pool.query(
      `UPDATE blog_posts
       SET title = COALESCE($1, title),
           slug = COALESCE($2, slug),
           excerpt = COALESCE($3, excerpt),
           content = COALESCE($4, content),
           category = COALESCE($5, category),
           author = COALESCE($6, author),
           cover_image = COALESCE($7, cover_image),
           read_time = COALESCE($8, read_time),
           status = COALESCE($9, status),
           updated_at = NOW()
       WHERE id = $10
       RETURNING *`,
      [title, slug, excerpt, content, category, author, cover_image, read_time, status, id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Blog post not found" });
    }
    res.json(result.rows[0]);
  } catch (error) {
    console.error("Error updating blog post:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.delete("/blog/:id", adminAuth, async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query(
      "DELETE FROM blog_posts WHERE id = $1 RETURNING *",
      [id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Blog post not found" });
    }
    res.json({ message: "Blog post deleted successfully" });
  } catch (error) {
    console.error("Error deleting blog post:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
