const User = require("../models/register");
const bcrypt = require("bcryptjs");

const authenticateUser = async (req, res, next) => {
    
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ success: false, msg: "Email not registered. Please register first." });
        }

        

        if (password != user.password) {
            return res.status(400).json({ success: false, msg: "Invalid password." });
        }else{
            console.log(user.username)
            return res.status(200).json({ success: true, msg: "Login successful.", username: user.username, email: user.email });
        }

        
        next(); // Pass to the next middleware or route handler

    } catch (error) {
        res.status(500).json({ success: false, msg: "Server error." });
    }
};

module.exports = { authenticateUser };
