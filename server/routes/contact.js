const express = require("express");
const router = express.Router();
const pool = require("../db");
const { validateContactForm, handleValidation } = require("../middleware/validate");

router.post("/contact", validateContactForm, handleValidation, async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    await pool.query(
      `INSERT INTO contact_submissions (name, email, subject, message)
       VALUES ($1, $2, $3, $4)`,
      [name, email, subject, message]
    );

    res.status(201).json({ message: "Message sent successfully" });
  } catch (error) {
    console.error("Error processing contact form:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
