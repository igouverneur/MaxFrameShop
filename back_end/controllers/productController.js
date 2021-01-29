const asyncHandler = require('express-async-handler');
const Product = require('../models/productsModel');


exports.getProducts = asyncHandler( async (req, res) => {
    const products = await Product.find({})
    res.json(products)
})


exports.getProductById = asyncHandler( async (req, res) => {
    const product = await Product.findById(req.params.id)
    if(product){
        res.json(product)
    }else{
        res.status(404)
        throw new Error('Product Not Found')
    }
})