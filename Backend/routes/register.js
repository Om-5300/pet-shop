const express = require('express');
const {registerUser} =require('../controllers/register.js')
const router = express.Router();
router.route("/").post(registerUser)
module.exports =router;