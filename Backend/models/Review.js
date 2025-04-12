const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  text: { type: String, required: true },
  author: { type: String, required: true },
});

module.exports = mongoose.model("Review", reviewSchema);
