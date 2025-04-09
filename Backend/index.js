const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const { connectMongodb } = require("./config/connection");
const userRouter = require("./routes/register");
const loginRouter = require("./routes/login");
const bestsellerRouter = require("./routes/bestsellerRoutes");
const productRoutes = require("./routes/productroutes");
const cartRoutes = require("./routes/cartRoute");
const paymentRoutes = require("./routes/paymentRoutes");
const orderRoutes = require("./routes/orderRoutes");
const userRoutes = require("./routes/userRoutes");

// Load environment variables
dotenv.config();

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000", // Frontend origin (React app)
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "email", "Authorization"],
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/images", express.static("public/images"));

// Set JWT secret
process.env.JWT_SECRET = "your_jwt_secret_key"; // In production, use a proper environment variable

// Connect to MongoDB
connectMongodb(
  "mongodb+srv://utopiapetshop111:Utopiapetshop%40111@cluster0.vvc09.mongodb.net/user"
)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log("❌ MongoDB Error:", err));

// Routes
app.use("/api/register", userRouter);
app.use("/api/login", loginRouter);
app.use("/api/bestsellers", bestsellerRouter); // ✅ Add bestseller API
app.use("/api/product", productRoutes); // ✅ Add product routes
app.use("/api/cart", cartRoutes);
app.use("/api/payment", paymentRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/users", userRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong!" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`🚀 Server running at http://localhost:${PORT}`)
);
