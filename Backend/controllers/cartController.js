const Cart = require("../models/Carts");

const getCart = async (req, res) => {
  try {
    const email = req.user.email;
    const cart = await Cart.findOne({ userId: email });
    res.json({ items: cart ? cart.items : [] });
  } catch (err) {
    console.error("Error fetching cart:", err);
    res.status(500).json({ message: "Server error" });
  }
};

const addToCart = async (req, res) => {
    try {
      const email = req.user.email;
      const { productId, title, price, image, quantity, size } = req.body;
  
      if (!productId || !title || !price || !image || !quantity || !size) {
        return res.status(400).json({ message: 'Missing required fields' });
      }
  
      let cart = await Cart.findOne({ userId: email });
  
      if (!cart) {
        // Create new cart and return early
        cart = new Cart({
          userId: email,
          items: [{ productId, title, price, image, quantity, size }],
        });
        await cart.save();
        return res.status(200).json(cart);
      }
  
      // Continue if cart already exists
      const itemIndex = cart.items.findIndex(
        (item) => item.productId === productId && item.size === size
      );
  
      if (itemIndex > -1) {
        cart.items[itemIndex].quantity += quantity;
      } else {
        cart.items.push({ productId, title, price, image, quantity, size });
      }
  
      await cart.save();
      res.status(200).json(cart);
    } catch (err) {
      console.error("Error adding to cart:", err);
      res.status(500).json({ message: "Server error" });
    }
  };
  

const updateCartItem = async (req, res) => {
  try {
    const { quantity } = req.body;
    const email = req.user.email;
    if (!quantity || quantity < 1) return res.status(400).json({ message: "Invalid quantity" });

    const cart = await Cart.findOne({ userId: email });
    if (!cart) return res.status(404).json({ message: "Cart not found" });

    const itemIndex = cart.items.findIndex((item) => item._id.toString() === req.params.itemId);
    if (itemIndex === -1) return res.status(404).json({ message: "Item not found" });

    cart.items[itemIndex].quantity = quantity;
    await cart.save();
    res.status(200).json(cart);
  } catch (err) {
    console.error("Error updating cart:", err);
    res.status(500).json({ message: "Server error" });
  }
};

const removeCartItem = async (req, res) => {
  try {
    const email = req.user.email;
    const cart = await Cart.findOne({ userId: email });

    if (!cart) return res.status(404).json({ message: "Cart not found" });

    cart.items = cart.items.filter((item) => item._id.toString() !== req.params.itemId);
    await cart.save();
    res.status(200).json(cart);
  } catch (err) {
    console.error("Error removing from cart:", err);
    res.status(500).json({ message: "Server error" });
  }
};

const clearCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.user.email });

    if (!cart) return res.status(404).json({ message: "Cart not found" });

    cart.items = [];
    await cart.save();
    res.status(200).json({ message: "Cart cleared" });
  } catch (err) {
    console.error("Error clearing cart:", err);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  getCart,
  addToCart,
  updateCartItem,
  removeCartItem,
  clearCart,
};
