// routes/reviewRoutes.js
const express = require("express");
const router = express.Router();
const { getAllReviews } = require("../controllers/reviewController");

router.get("/reviews", getAllReviews);

module.exports = router;
