const express = require("express");
const router = express.Router();
const pool = require("../db");

router.get("/categories", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM categories ORDER BY sort_order"
    );
    res.json(result.rows);
  } catch (error) {
    console.error("Error fetching categories:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/apps", async (req, res) => {
  try {
    const { category, featured, search } = req.query;
    let query = `
      SELECT a.*, c.name as category_name, c.slug as category_slug
      FROM apps a
      JOIN categories c ON a.category_id = c.id
    `;
    const conditions = [];
    const params = [];

    if (category) {
      params.push(category);
      conditions.push(`c.slug = $${params.length}`);
    }
    if (featured === "true") {
      conditions.push("a.is_featured = true");
    }
    if (search) {
      params.push(`%${search}%`);
      conditions.push(`(a.name ILIKE $${params.length} OR a.tagline ILIKE $${params.length})`);
    }

    if (conditions.length > 0) {
      query += " WHERE " + conditions.join(" AND ");
    }
    query += " ORDER BY a.is_featured DESC, a.name";

    const result = await pool.query(query, params);
    res.json(result.rows);
  } catch (error) {
    console.error("Error fetching apps:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/apps/:slug", async (req, res) => {
  try {
    const { slug } = req.params;
    const result = await pool.query(
      `SELECT a.*, c.name as category_name, c.slug as category_slug
       FROM apps a
       JOIN categories c ON a.category_id = c.id
       WHERE a.slug = $1`,
      [slug]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: "App not found" });
    }
    const relatedResult = await pool.query(
      `SELECT a.*, c.name as category_name, c.slug as category_slug
       FROM apps a
       JOIN categories c ON a.category_id = c.id
       WHERE a.category_id = $1 AND a.slug != $2
       LIMIT 4`,
      [result.rows[0].category_id, slug]
    );
    res.json({ app: result.rows[0], related: relatedResult.rows });
  } catch (error) {
    console.error("Error fetching app:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
