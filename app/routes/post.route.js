const express = require("express");
const router = express.Router();
const PostController = require("../controllers/post.controller");
const {
  PostValidationRules,
  validate,
} = require("../validations/post.validations");

router.post("/", PostValidationRules(), validate, PostController.InsertPost);
router.get("/", PostController.FetchPosts);
router.get("/post/:id", PostController.FetchPost);
router.put("/post/:id", PostController.UpdatePost);
router.delete("/post/:id", PostController.DeletePost);

module.exports = router;
