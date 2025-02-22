const mongoose = require("mongoose");

const bestsellerSchema = new mongoose.Schema({
  title: String,
  className: String,
  items: [
    {
      image: String,
      title: String,
      price: String,
    },
  ],
});

const Bestseller = mongoose.model("Bestseller", bestsellerSchema);

module.exports = Bestseller;
