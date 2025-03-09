const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  title: String,
  images: [String], // Array of image paths
  price: {
    base: String,
    discounted: String,
    save: String
  },
  description: String,
  weights: [String], // Different weight options
  relatedProducts: [
    {
      id: Number,
      image: String,
      title: String,
      price: String
    }
  ]
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
