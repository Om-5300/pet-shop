const mongo =require('mongoose');
const userSchema=new mongo.Schema({
    username: {
        type:String,
        required:true,

    },
    email:{
        type :String,
        required:true,
        
    },
    password:{
        type:String,
        required:true,
    }
})
const User=mongo.model('user',userSchema,'users')

module.exports = User;
