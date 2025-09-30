const express = require("express");
const router = express.Router();

// auth middleware

router.get("/all-questions", (req, res) => {
  res.send("all questions");
});

module.exports = router;
