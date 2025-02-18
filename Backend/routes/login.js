const express = require("express");
const router = express.Router();
const { authenticateUser } = require("../middleware/authuser"); // ✅ Fixed import

router.route("/").post( authenticateUser, (req, res) => {  // ✅ Fixed route method
  res.json({ message: "Login successful!" });
});

module.exports = router;
