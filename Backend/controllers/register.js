const User = require("../models/register.js");
const bcrypt = require("bcryptjs");

async function registerUser(req, res) {
  const { name, email, password } = req.body;

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      return res.status(400).json({ msg: "Email already registered", user: existingUser });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create and save new user
    const result = await User.create({
      username: name,
      email: email,
      password: hashedPassword,
    });

    return res.status(201).json({ msg: "Success", userId: result._id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server error" });
  }
}

module.exports = { registerUser };
