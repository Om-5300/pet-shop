const express = require("express");
const Bestseller = require("../models/Bestseller");

const router = express.Router();

// Get all bestsellers
router.get("/", async (req, res) => {
  try {
    const bestsellers = await Bestseller.find();
    res.json(bestsellers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
