const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    rating:{
        type: Number,
        required: true
    },
    comment: {
        type: String,
        required : true
    }
}, {timestamps: true})

const productSchema = mongoose.Schema({
   user:{
       type: mongoose.Schema.Types.ObjectId,
       required: true,
       ref: "User"
   },
   name:{
       type: String,
       required: true
   },
   image:{
       type: String,
       required: true
   },
   description:{
       type: String
   },
   rating:{
       type: Number,
       default: 0
   },
   category: {
       type: String,
       required: true
   },
   reviews : [reviewSchema],
   numReviews: {
       type: Number,
       default: 0
   },
   price: {
       type: Number,
       required: true,
       default: 0
   },
   priceDz: {
    type: Number,
    required: true,
    default: 0
   },
   countInStock: {
       type: Number,
       required: true,
       default: 0
   },
   brand: {
       type: String,
       required: true
   },
   isOnSale: {
       type: Boolean,
       required: true,
       default: false
   },
   salePrice: {
       type: Number,
   }

}, {timestamps: true})



module.exports = mongoose.model("Product", productSchema)