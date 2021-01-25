const mongoose = require('mongoose');


const orderSchema = mongoose.Schema({
   user:{
       type: mongoose.Schema.Types.ObjectId,
       required: true,
       ref: "User"
   },
   orderItems: [
       {
           productName: {
               type: String,
               required: true
           },
           qty: {
               type: Number,
               required: true
           },
           image: {
               type: String,
               required: true
           },
           price: {
               type: Number,
               required: true
           },
           priceDz: {
               type: Number,
               required: true
           },
           product:{
                type: mongoose.Schema.Types.ObjectId,
                required: true,
                ref: "Product"
           }
       }
   ],
   shippingAddress:{
       address:{
           type: String,
           required: true
       },
       wilaya: {
           type: String,
           required: true
       },
       daira: {
           type: String,
           required: true
       }
   },
   paymentMethod: {
        type: String,
        required : true,
   },
   paymentResult: {
       id: {
           type: String,
       },
       status: {
           type: String
       },
       updateTime: {
           type: String
       },
       emailAddress:{
           type:String
       }
   },
   shippingPrice: {
       type: Number,
       default: 0.0
   },
   totalPrice: {
       type: Number,
       default: 0.0

   },
   isPaid: {
       type: Boolean,
       required: true,
       default: false
   },
   paidAt: {
       type: Date,

   },
   isDelivered: {
       type: Boolean,
       required: true,
       default: false
   },
   DeliveredAt: {
    type: Date,

},

}, {timestamps: true})



module.exports = mongoose.model("Order", orderSchema)