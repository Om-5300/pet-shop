const Order = require("../models/orderModel");
const jwt = require("jsonwebtoken");
const User = require("../models/register");

// Get all orders for a user
const getOrders = async (req, res) => {
  try {
    // Get token from header
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "No token provided" });
    }

    const token = authHeader.split(" ")[1];

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Check if token has required fields
    if (!decoded || !decoded.email) {
      return res.status(401).json({ message: "Invalid token format" });
    }

    const userEmail = decoded.email;

    // Find all orders for the user
    const orders = await Order.find({ userId: userEmail }).sort({
      createdAt: -1,
    });

    res.status(200).json(orders);
  } catch (error) {
    console.error("Error fetching orders:", error);
    if (error.name === "JsonWebTokenError") {
      return res.status(401).json({ message: "Invalid token" });
    }
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({ message: "Token expired" });
    }
    res.status(500).json({ message: "Error fetching orders" });
  }
};



module.exports = {
  getOrders

};
