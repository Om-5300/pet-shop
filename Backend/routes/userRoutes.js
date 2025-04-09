const express = require("express");
const router = express.Router();
const { verifyToken } = require("../middleware/authuser");
const {
  getProfile,
  updateProfile,
} = require("../controllers/profileController");

router.get("/profile", verifyToken, getProfile);
router.put("/profile", verifyToken, updateProfile);

module.exports = router;
