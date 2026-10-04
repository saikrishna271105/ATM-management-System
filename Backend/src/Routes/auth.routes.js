const express = require('express')

const router = express.Router()
const authController = require('../Controllers/auth.controller')

const authMiddleware = require('../middlewares/auth.middleware')
const validateMiddleware = require('../middlewares/validator.middleware')

router.post('/register',validateMiddleware.creationValidateRules,authController.registerUser)

router.post('/login',validateMiddleware.loginValidateRules,authController.loginUser)

router.get("/profile",authMiddleware.authVerify,authController.getAccountDetails)

router.patch('/update',authMiddleware.authVerify,authController.updateUser)

router.post('/logout',authMiddleware.authVerify,authController.logoutUser)

router.post('/changepin',authMiddleware.authVerify,authController.changePIN)

module.exports = router