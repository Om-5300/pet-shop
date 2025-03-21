const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  title: String,
  images: { type: [String], default: ["/default-image.jpg"] }, // ✅ Default image
  price: {
    base: { type: String, default: "0" },
    discounted: { type: String, default: "0" },
    save: { type: String, default: "0%" },
  },
  description: { type: String, default: "No description available." },
  weights: { type: [String], default: ["N/A"] }, // ✅ Default value
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
