const User = require("../models/register.js")
async function registerUser(req,res) {
    
    const { name, email, password } = req.body;
    console.log(name)
    console.log(email)
    console.log(password)
    
    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
        
        return res.status(400).json({ msg: "Email already registered", user: existingUser });
    }
    console.log("outside if")
    const result= await User.create({
        username:name,
        email:email,
        password:password,
    })
    console.log(result)
    return res.status(201).json({msg:"Success"})
}

module.exports= {registerUser,};