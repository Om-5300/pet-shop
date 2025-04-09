const express = require("express");
const router = express.Router();
const { verifyToken } = require("../middleware/authuser");
const {
  getOrders
} = require("../controllers/orderController");

router.get("/", verifyToken, getOrders);


module.exports = router;
