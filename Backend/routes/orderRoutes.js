const express = require("express");
const router = express.Router();
const { verifyToken } = require("../middleware/authuser");
const {
  getOrders,
  createOrder,
  updateOrderStatus,
  getUserOrders,
  getOrderById,
} = require("../controllers/orderController");

router.get("/", verifyToken, getOrders);

router.get("/user/:userId", verifyToken, getUserOrders);

router.get("/:orderId", verifyToken, getOrderById);

router.post("/", verifyToken, createOrder);

router.patch("/:orderId/status", verifyToken, updateOrderStatus);

module.exports = router;
