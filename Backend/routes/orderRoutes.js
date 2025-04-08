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

// Get all orders for the authenticated user
router.get("/", verifyToken, getOrders);

// Get all orders for a specific user (admin route)
router.get("/user/:userId", verifyToken, getUserOrders);

// Get a single order by ID
router.get("/:orderId", verifyToken, getOrderById);

// Create a new order
router.post("/", verifyToken, createOrder);

// Update order status
router.patch("/:orderId/status", verifyToken, updateOrderStatus);

module.exports = router;
