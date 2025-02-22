const mongoose = require("mongoose");
const Bestseller = require("../models/Bestseller");

const data = [
  {
    title: "For Dogs",
    className: "fordog",
    items: [
      { image: "image/dogitem1.svg", title: "Dog Food", price: "£19.99 GBP" },
      { image: "image/dogitem2.svg", title: "Chew Toy", price: "£14.99 GBP" },
      { image: "image/dogitem3.svg", title: "Dog Collar", price: "£9.99 GBP" },
      { image: "image/dogitem4.svg", title: "Dog Bed", price: "£29.99 GBP" },
      { image: "image/dogitem5.svg", title: "Dog Shampoo", price: "£12.99 GBP" },
    ],
  },
  {
    title: "For Cats",
    className: "forcat",
    items: [
      { image: "image/catitem1.svg", title: "Cat Litter", price: "£10.99 GBP" },
      { image: "image/catitem2.svg", title: "Cat Toy", price: "£8.99 GBP" },
      { image: "image/catitem3.svg", title: "Cat Bed", price: "£24.99 GBP" },
      { image: "image/catitem4.svg", title: "Cat Scratcher", price: "£19.99 GBP" },
      { image: "image/catitem5.svg", title: "Cat Treats", price: "£5.99 GBP" },
    ],
  },
];

mongoose
  .connect("mongodb+srv://utopiapetshop111:Utopiapetshop%40111@cluster0.vvc09.mongodb.net/user", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    console.log("✅ MongoDB Connected");
    await Bestseller.deleteMany({});
    await Bestseller.insertMany(data);
    console.log("✅ Data Inserted Successfully");
    mongoose.connection.close();
  })
  .catch((err) => console.error("❌ MongoDB Error:", err));
