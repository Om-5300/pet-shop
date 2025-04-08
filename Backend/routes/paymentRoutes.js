const express = require("express");
const router = express.Router();
const {
  processPayment,
  getOrderStatus,
} = require("../controllers/paymentController");
const { verifyToken } = require("../middleware/authuser");

// Process payment
router.post("/process", verifyToken, processPayment);

// Get order status
router.get("/order/:orderId", verifyToken, getOrderStatus);

module.exports = router;
