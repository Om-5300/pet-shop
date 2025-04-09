const express = require("express");
const router = express.Router();
const { authenticateUser } = require("../middleware/authuser"); 

router.route("/").post( authenticateUser, (req, res) => { 
  res.json({ message: "Login successful!" });
});

module.exports = router;
