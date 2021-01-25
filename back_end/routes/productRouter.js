const express = require('express');
const router = express.Router();

//import Model
const Product = require('../models/productsModel')

router.get('/', (req, res) => {
    res.send('GET all products')
})
router.get('/:id', (req, res) => {
    res.send('GET single product')
})

module.exports = router;