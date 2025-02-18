const express = require("express");
const router = express.Router();
const { authenticateUser } = require("../middleware/authMiddleware");  // ✅ Correct

router.post("/login", authenticateUser, (req, res) => {
  res.json({ message: "Login successful!" });
});

module.exports = router;
