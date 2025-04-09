const express = require("express");
const router = express.Router();
const {
  processPayment,
  getOrderStatus,
} = require("../controllers/paymentController");
const { verifyToken } = require("../middleware/authuser");

router.post("/process", verifyToken, processPayment);

router.get("/order/:orderId", verifyToken, getOrderStatus);

module.exports = router;
