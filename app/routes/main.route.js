const express = require("express");
const router = express.Router();

router.get("", (req, res) => {
  console.log("Welcome to Blog app");
});

router.get("/about", (req, res) => {
  res.send("Hello World");
});
module.exports = router;
