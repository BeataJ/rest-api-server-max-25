const express = require("express");
const { check, body } = require("express-validator");

const feedController = require("../controllers/feed");

const router = express.Router();
//  GET /feed/posts
router.get("/posts", feedController.getPosts);

// POST /feed/post
router.post(
  "/post",
  [
    body("title")
      .trim()
      .isLength({ max: 5 }),
    body("content")
      .trim()
      .isLength({ max: 5 })
  ],
  feedController.createPost
);

module.exports = router;
