const express = require("express");
const app = express();
const cors = require("cors");
const { connectMongodb } = require("./config/connection");
const userRouter = require("./routes/register");
const loginRouter = require("./routes/login");
const bestsellerRouter = require("./routes/bestsellerRoutes"); 
const productRoutes = require("./routes/productroutes");
const cartRoutes= require("./routes/cartRoute")
app.use(cors({
  origin: "http://localhost:3000", // Frontend origin (React app)
  methods: ["GET", "POST","PUT","DELETE"],
  allowedHeaders: ["Content-Type","email","Authorization"],
}));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/images", express.static("public/images"));

// Connect to MongoDB
connectMongodb("mongodb+srv://utopiapetshop111:Utopiapetshop%40111@cluster0.vvc09.mongodb.net/user")
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log("❌ MongoDB Error:", err));

// Routes
app.use("/register", userRouter);
app.use("/login", loginRouter);
app.use("/bestsellers", bestsellerRouter); // ✅ Add bestseller API
app.use("/product", productRoutes); // ✅ Add product routes
app.use('/api/cart', cartRoutes);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));
