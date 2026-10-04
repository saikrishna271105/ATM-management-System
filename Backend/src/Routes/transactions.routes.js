const express = require('express')

const router = express.Router()
const authMiddleware = require('../middlewares/auth.middleware')
const transactionController = require('../Controllers/transactions.controller')

router.post('/withdraw',authMiddleware.authVerify,transactionController.withdrawMoney)

router.post('/deposit',authMiddleware.authVerify,transactionController.depositMoney)

router.get('/checkBalance',authMiddleware.authVerify,transactionController.checkBalance)

module.exports = router