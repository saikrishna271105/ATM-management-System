const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    accNo:{
        type:String,
        required:true,
        unique:true
    },
    PIN:{
        type:String,
        required:true
    },
    balance:{
        type:Number,
        required:true,
        default:1000
    },
    mobile:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    }
})

const userModel = mongoose.model("user",userSchema)

module.exports = userModel