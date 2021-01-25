const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    userName:{
        type: String,
        required: true,
        unique: true
    },
    phoneNumber:{
        type: String,
        required: true,
        unique: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
        min: 6
    },
    isAdmin:{
        type: Boolean,
        required: true,
        default: false
    }
}, {timestamps: true})



module.exports = mongoose.model("User", userSchema)