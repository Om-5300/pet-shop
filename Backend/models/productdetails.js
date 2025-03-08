const mongoose = require("mongoose");


// Category Schema (for Main Page)
const categorySchema = new mongoose.Schema({
  title: String,
  className: String,
  items: [
    {
      _id: mongoose.Schema.Types.ObjectId,
      image: String,
      title: String,
      price: String
    }
  ]
});
const Category = mongoose.model("Category", categorySchema);

// Product Schema (for Details & Explore Page)
const productSchema = new mongoose.Schema({
  title: String,
  images: [String],
  price: {
    base: String,
    discounted: String,
    save: String
  },
  description: String,
  weights: [String],
  relatedProducts: [
    {
      _id: mongoose.Schema.Types.ObjectId,
      image: String,
      title: String,
      price: String
    }
  ]
});
const Product = mongoose.model("Product", productSchema);

module.exports = { Category, Product };

