const Cart = require("../models/Carts");
const Order = require("../models/orderModel");
const User = require("../models/register");

// Mock UPI verification function (replace with actual UPI verification logic)
const verifyUPI = async (upiId, pin) => {
  // In a real implementation, this would verify with a UPI service provider
  return true;
};

// Mock balance check function (replace with actual balance check logic)
const checkBalance = async (upiId, amount) => {
  // In a real implementation, this would check with a payment service
  return true;
};

// Process payment and create order
const processPayment = async (req, res) => {
  try {
    const { upiId, pin, items } = req.body;
    const userId = req.user.email;

    // Validate request
    if (
      !upiId ||
      !pin ||
      !items ||
      !Array.isArray(items) ||
      items.length === 0
    ) {
      return res.status(400).json({
        success: false,
        message: "Invalid request parameters",
      });
    }

    // Verify UPI credentials
    const isUPIValid = await verifyUPI(upiId, pin);
    if (!isUPIValid) {
      return res.status(400).json({
        success: false,
        message: "Invalid UPI credentials",
      });
    }

    // Calculate total amount
    const totalAmount = items.reduce((total, item) => {
      return total + Number(item.price) * Number(item.quantity);
    }, 0);

    // Check balance
    const hasSufficientBalance = await checkBalance(upiId, totalAmount);
    if (!hasSufficientBalance) {
      return res.status(400).json({
        success: false,
        message: "Insufficient balance",
      });
    }

    // Create order
    const order = new Order({
      userId: userId,
      items: items,
      totalAmount: totalAmount,
      paymentMethod: "UPI",
      upiId: upiId,
      status: "completed",
    });

    await order.save();

    // Clear cart
    await Cart.findOneAndUpdate(
      { userId: userId },
      { $set: { items: [] } },
      { new: true }
    );

    return res.status(200).json({
      success: true,
      message: "Payment successful",
      orderId: order._id,
      status: "completed",
    });
  } catch (error) {
    console.error("Payment processing error:", error);
    return res.status(500).json({
      success: false,
      message: "Payment processing failed",
      error: error.message,
    });
  }
};

// Get order status
const getOrderStatus = async (req, res) => {
  try {
    const { orderId } = req.params;

    const order = await Order.findById(orderId);
    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }

    return res.status(200).json({
      success: true,
      order: {
        orderId: order._id,
        status: order.status,
        totalAmount: order.totalAmount,
        items: order.items,
        createdAt: order.createdAt,
      },
    });
  } catch (error) {
    console.error("Error fetching order status:", error);
    return res.status(500).json({
      success: false,
      message: "Error fetching order status",
      error: error.message,
    });
  }
};

module.exports = {
  processPayment,
  getOrderStatus,
};
