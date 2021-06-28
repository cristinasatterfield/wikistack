const express = require("express");
const router = express.Router();

// GET /users
router.get("/", async (req, res, next) => {
  res.send('<h1>Welcome to Users!</h1>')
});

module.exports = router;
