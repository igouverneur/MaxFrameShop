const { ref } = require('@hapi/joi');
const Joi = require('@hapi/joi');

exports.registerValidation = data => {
    const registerSchema = Joi.object({
        firstName: Joi.string().min(3).required(),
        lastName: Joi.string().min(3).required(),
        userName: Joi.string().min(3).max(25).alphanum().required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(3).required(),
        repeatPassword: Joi.ref('password'),
        phoneNumber: Joi.string().required()
    })
    return registerSchema.validate(data)
}

exports.loginValidation = data => {
    const loginSchema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().min(3).required(),
    })
    return loginSchema.validate(data)
}