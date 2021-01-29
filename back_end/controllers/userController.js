const asyncHandler = require('express-async-handler');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');


//import validation
const {registerValidation, loginValidation} = require('../validation')

exports.userRegister = asyncHandler( async (req, res) => {
    const {firstName, lastName, userName, phoneNumber, email, password} = req.body
    //Validation
    const {error} = registerValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message)
    //Check Email Exist
    const emailExist = await User.findOne({email: email})

    if(emailExist) return res.status(400).send(" Email already exists")

    //Hash Password
    const hashedPassword = await bcrypt.hash(password, 10)

    //Create User
    const user = new User({
        firstName,
        lastName,
        userName,
        email,
        password: hashedPassword,
        phoneNumber
    })
    const savedUser = await user.save()
    res.status(201).json({
        _id: savedUser._id,
        firstName: savedUser.firstName,
        lastName: savedUser.lastName,
        userName: savedUser.userName,
        email: savedUser.email,
        phoneNumber: savedUser.phoneNumber,
        isAdmin: savedUser.isAdmin
    })
})
exports.userLogin = asyncHandler( async (req, res) => {
    const {email, password} = req.body
    const {error} = loginValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message)
    const user = await User.findOne({email: email})

    if(!user) return res.status(400).send("Email or Password not correct")
    //Check Password if correct
    const validPassword = await bcrypt.compare(password, user.password)

    if(!validPassword) return res.status(400).send("Invalid password")

    //Create token
    const token = jwt.sign({id: user._id}, process.env.TOKEN_SECRET )
    res.send({token: token})
})

exports.getUserProfile = asyncHandler( async (req ,res) => {
    
})