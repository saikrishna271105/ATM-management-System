const userModel = require('../models/user.model')
const jwt = require('jsonwebtoken')
const bcryptjs = require('bcryptjs')

async function registerUser(req,res){
    const {username,accNo,PIN,balance=1000,mobile,address} = req.body
    const existinguser = await userModel.findOne(
        {accNo}
    )

    if(existinguser){
        return res.status(401).json({
            message:"User with this account number already exists"
        })
    }

    const hash = await bcryptjs.hash(PIN,10)

    const user = await userModel.create({
        username,
        accNo,
        PIN:hash,
        balance,
        mobile,
        address
    })

    const token = jwt.sign({
        id:user._id,
        accNo:user.accNo
    },process.env.JWT_SECRET)

    res.cookie("token",token)


    res.status(200).json({
        message:"Account created successfully",
        user
    })

}

async function loginUser(req,res){
    const {accNo,PIN} = req.body

    const IsUserAlreadyExists = await userModel.findOne({
        accNo
    })

    if(!IsUserAlreadyExists){
        return res.status(401).json({
            message:"User doesnt exists"
        })
    }

    const isCorrectPIN = await bcryptjs.compare(PIN,IsUserAlreadyExists.PIN)

    if(!isCorrectPIN){
        return res.status(401).json({
            message:"Invalid PIN, Try Again"
        })
    }

    const token = jwt.sign({
        id:IsUserAlreadyExists._id,
        accNo:accNo
    },process.env.JWT_SECRET)

    res.cookie("token",token)

    res.status(200).json({
        message:"User logged successfully"
    })

}

async function getAccountDetails(req,res){
    const user = await userModel.findOne({
       _id:req.user.id
    })
    return res.status(200).json({
        message:"User fetched successfully",
        user
    })
}    

async function updateUser(req,res){
    const {mobile,address} = req.body

    const id=req.user.id 

    if(!mobile && !address){
        return res.status(401).json({
            message:"No info to update"
        })
    }

    const user = await userModel.findOne({
        _id:id
    })

    if(mobile && address){
        user.mobile = mobile;
        user.address = address
    }
    else if(mobile){
        user.mobile = mobile
    }
    else{
        user.address = address
    }

    await user.save()

    return res.status(201).json({
        message:"Account details updated successfully",
        user
    })

}

async function logoutUser(req,res){
    res.clearCookie("token");

    return res.status(200).json({
        message:"User logged out successfully"
    })
}

async function changePIN(req,res){
    const {currentPin,PIN} = req.body
    const id = req.user.id

    const user = await userModel.findOne({
        _id:id
    })

    const isCorrectPIN =await bcryptjs.compare(currentPin,user.PIN)

    if(!isCorrectPIN){
        return res.status(401).json({
            message:"Invalid current PIN"
        })
    }

    const hash = await bcryptjs.hash(PIN,10)
    const updatedUser = await userModel.findOneAndUpdate(
        {_id:id},
        {PIN:hash}
    )

    res.status(201).json({
        message:"PIN Changed successfully",
        user:updatedUser
    })
}

module.exports = {registerUser, loginUser, getAccountDetails, updateUser, logoutUser, changePIN}