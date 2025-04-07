const express = require("express");
const router = express.Router();
const {
  getCart,
  addToCart,
  updateCartItem,
  removeCartItem,
  clearCart,
} = require("../controllers/cartController");
const {verifyToken} = require("../middleware/authuser");

// ✅ Secure all routes with verifyToken middleware
router.get("/", verifyToken, getCart);
router.post("/add", verifyToken, addToCart);
router.put("/update/:itemId", verifyToken, updateCartItem);
router.delete("/remove/:itemId", verifyToken, removeCartItem);
router.delete("/clear", verifyToken, clearCart);

module.exports = router;
