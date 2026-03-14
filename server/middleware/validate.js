const { body, param, validationResult } = require("express-validator");

const validateBlogPost = [
  body("title").trim().notEmpty().withMessage("Title is required").isLength({ max: 255 }).withMessage("Title must be 255 characters or less"),
  body("content").trim().notEmpty().withMessage("Content is required"),
  body("status").optional().isIn(["published", "draft"]).withMessage("Status must be 'published' or 'draft'"),
  body("category").optional().trim().isLength({ max: 100 }),
  body("author").optional().trim().isLength({ max: 100 }),
  body("excerpt").optional().trim(),
  body("cover_image").optional().trim().isLength({ max: 500 }),
  body("read_time").optional().trim().isLength({ max: 50 }),
];

const validateBlogUpdate = [
  body("title").optional().trim().isLength({ max: 255 }).withMessage("Title must be 255 characters or less"),
  body("content").optional().trim(),
  body("status").optional().isIn(["published", "draft"]).withMessage("Status must be 'published' or 'draft'"),
  body("category").optional().trim().isLength({ max: 100 }),
  body("author").optional().trim().isLength({ max: 100 }),
  body("excerpt").optional().trim(),
  body("cover_image").optional().trim().isLength({ max: 500 }),
  body("read_time").optional().trim().isLength({ max: 50 }),
];

const validateIdParam = [
  param("id").isInt({ min: 1 }).withMessage("ID must be a positive integer"),
];

const validateSlugParam = [
  param("slug").matches(/^[a-z0-9-]+$/).withMessage("Invalid slug format"),
];

const validateContactForm = [
  body("name").trim().notEmpty().withMessage("Name is required").isLength({ max: 255 }),
  body("email").trim().notEmpty().withMessage("Email is required").isEmail().withMessage("Invalid email address"),
  body("subject").trim().notEmpty().withMessage("Subject is required").isLength({ max: 500 }),
  body("message").trim().notEmpty().withMessage("Message is required"),
];

const handleValidation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

module.exports = {
  validateBlogPost,
  validateBlogUpdate,
  validateIdParam,
  validateSlugParam,
  validateContactForm,
  handleValidation,
};
