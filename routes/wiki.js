const express = require("express");
const router = express.Router();

// GET /users
router.get("/", async (req, res, next) => {
  res.send('<h1>Welcome to GET /wiki!</h1>')
});

router.post("/", async (req, res, next) => {
  res.send('<h1>Welcome to POST /wiki!</h1>')
});

router.get("/add", async (req, res, next) => {
  res.send('<h1>Welcome to GET /wiki/add!</h1>')
});

module.exports = router;
