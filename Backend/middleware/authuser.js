const User = require("../models/register");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const JWT_SECRET = "your_jwt_secret_key"; // 🔒 Use environment variable in production

// User Login Handler
const authenticateUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        success: false,
        msg: "Email not registered. Please register first.",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ success: false, msg: "Invalid password." });
    }

    // Generate JWT
    const token = jwt.sign(
        { id: user._id, email: user.email }, // ✅ Add email here
        JWT_SECRET,
        { expiresIn: "1d" }
      );

    return res.status(200).json({
      success: true,
      msg: "Login successful.",
      token,
      user: {
        username: user.username,
        email: user.email,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, msg: "Server error." });
  }
};

// JWT Verification Middleware
const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  // Check for token in header
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ msg: "No token provided" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded; // Attach decoded payload (like user id) to req
    next();
  } catch (err) {
    console.error("Invalid token:", err);
    return res.status(401).json({ msg: "Invalid token" });
  }
};

module.exports = { authenticateUser, verifyToken };
