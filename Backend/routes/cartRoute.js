// routes/cartRoutes.js
const express = require('express');
const router = express.Router();
const Cart = require('../models/Carts');
router.get("/", async (req, res) => {
  try {
    const email = req.headers.email;
    
    if (!email) return res.status(400).json({ error: "Email is required" });
    
    const cart = await Cart.findOne({ userId: email });
    res.json({ items: cart ? cart.items : [] });
  } catch (err) {
    console.error("Error fetching cart:", err);
    res.status(500).json({ message: "Server error" });
  }
});


// Add item to cart
router.post('/add',  async (req, res) => {
  try {
    const {email, productId, title, price, image, quantity, size } = req.body;
    
    // Validate request
    if (!productId || !title || !price || !image || !quantity || !size) {
      return res.status(400).json({ message: 'Missing required fields' });
    }
    console.log("hello")
    let cart = await Cart.findOne({ userId: email });
    console.log(cart)
    if (!cart) {
      // Create new cart if doesn't exist
      cart = new Cart({
        userId:email,
        items: [{ productId, title, price, image, quantity, size }]
      });
      console.log("added successfully")
    } else {
      // Check if item exists with same productId and size
      const itemIndex = cart.items.findIndex(
        item => item.productId === productId && item.size === size
      );
      
      if (itemIndex > -1) {
        // Update quantity if item exists
        cart.items[itemIndex].quantity += quantity;
      } else {
        // Add new item
        cart.items.push({ productId, title, price, image, quantity, size });
      }
    }
    
    await cart.save();
    res.status(200).json(cart);
  } catch (err) {
    console.error('Error adding to cart:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Update cart item quantity
router.put('/update/:itemId',  async (req, res) => {
  try {
    const { quantity, emailId } = req.body;
    
    if (!quantity || quantity < 1) {
      return res.status(400).json({ message: 'Invalid quantity' });
    }
    
    const cart = await Cart.findOne({ userId: emailId });
    
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }
    
    const itemIndex = cart.items.findIndex(item => item._id.toString() === req.params.itemId);
    
    if (itemIndex === -1) {
      return res.status(404).json({ message: 'Item not found in cart' });
    }
    
    cart.items[itemIndex].quantity = quantity;
    await cart.save();
    
    res.status(200).json(cart);
  } catch (err) {
    console.error('Error updating cart:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Remove item from cart
router.delete('/remove/:itemId',  async (req, res) => {
  try {
    const email = req.headers.email;
    const cart = await Cart.findOne({ userId: email });
    console.log(email)
    console.log(cart)
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }
    
    cart.items = cart.items.filter(item => item._id.toString() !== req.params.itemId);
    await cart.save();
    
    res.status(200).json(cart);
  } catch (err) {
    console.error('Error removing from cart:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Clear cart
router.delete('/clear',  async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.user.id });
    
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }
    
    cart.items = [];
    await cart.save();
    
    res.status(200).json({ message: 'Cart cleared' });
  } catch (err) {
    console.error('Error clearing cart:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;