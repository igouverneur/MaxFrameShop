const express = require('express');
const connectDB = require('./db');

//IMPORT ROUTES
const productRouter = require('./routes/productRouter')

require('dotenv').config();

connectDB();

const app = express();

//Routers
app.use('/api/products', productRouter)

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log('server running'))