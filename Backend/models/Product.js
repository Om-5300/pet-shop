const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  productId: { type: Number }, 
  title: String,
  images: { type: [String], default: ["/default-image.jpg"] },
  price: {
    base: { type: String, default: "0" },
    discounted: { type: String, default: "0" },
    save: { type: String, default: "0%" },
  },
  description: { type: String, default: "No description available." },
  weights: { type: [String], default: ["N/A"] },
  stock: { type: Number, default: 0 }, 
  relatedProducts: [
    {
      id: Number,
      image: { type: String, default: "/default-image.jpg" },
      title: { type: String, default: "No related product" },
      price: { type: String, default: "N/A" },
    },
  ],
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
