const userModel = require('../models/user.model')

async function withdrawMoney(req,res){
    const {amount} = req.body
    if(amount <= 0){
        return res.status(401).json({
            message:"Invalid input amount details"
        })
    }

    const id = req.user.id

    const user = await userModel.findOne({
        _id:id
    })
    let balance = user.balance 

    if(balance < amount){
        return res.status(401).json({
            message:"Insufficient Balance"
        })
    }

    balance -= amount
    user.balance = balance
    await user.save()

    return res.status(200).json({
        message:"Money withdrawn successfully",
        user
    })

}

async function depositMoney(req,res){
    const {amount} = req.body
    if(amount <= 0){
        return res.status(401).json({
            message:"Invalid input amount details"
        })
    }

    const id = req.user.id

    const user = await userModel.findOne({
        _id:id
    })
    let balance = user.balance 
    balance += amount
    user.balance = balance
    await user.save()

    return res.status(200).json({
        message:"Money deposited successfully",
        user
    })
}

async function checkBalance(req,res){
    const id = req.user.id

    const user = await userModel.findOne({
        _id:id
    })

    res.status(200).json({
        message:"Balance fetched successfully",
        balance:user.balance,
        accNo : user.accNo
    })
}

module.exports = {withdrawMoney, depositMoney, checkBalance}