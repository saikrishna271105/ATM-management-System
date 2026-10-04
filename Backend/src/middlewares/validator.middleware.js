const {body,validationResult} = require('express-validator')

async function validateResult(req,res,next){
    const errors = validationResult(req)

    if(!errors.isEmpty()){
        return res.status(401).json({
            message:"Validation errors",
            errors:errors.array()
        })
    }

    next()

}

const creationValidateRules =[
    body('username')
    .isString()
    .withMessage('username should be of string type'),
    body('accNo')
    .isString()
    .withMessage('accNo should be of string type'),
    body('PIN')
    .isString()
    .withMessage('PIN should be of string type'),
    body('mobile')
    .isString()
    .withMessage('mobile should be of string type'),
    body('address')
    .isString()
    .withMessage('address should be of string type'),
    validateResult
]

const loginValidateRules = [
    body('accNo')
    .isString()
    .withMessage('accNo should be of string type'),
    body('PIN')
    .isString()
    .withMessage('PIN should be of string type'),
    validateResult
]

module.exports = {creationValidateRules,loginValidateRules}