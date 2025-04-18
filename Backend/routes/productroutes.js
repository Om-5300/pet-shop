const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

// GET all products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// GET a single product by ID
router.get("/:id", async (req, res) => {
  try {
    console.log("Fetching product with ID:", req.params.id);
    const product = await Product.findById(req.params.id);

    if (!product) {
      console.log("Product not found"); 
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(product);
  } catch (error) {
    console.error("Error fetching product:", error);
    res.status(500).json({ message: "Server error" });
  }
});


module.exports = router;
