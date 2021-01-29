const express = require('express');
const connectDB = require('./db');

//IMPORT ROUTES
const productRouter = require('./routes/productRouter')
const userRouter = require('./routes/userRouter')

//IMPORT errorMiddleware
const {notFound, errorHandler} = require('./middleware/errorMiddleware');
const { not } = require('@hapi/joi');

require('dotenv').config();

connectDB();

const app = express();

//app.use(notFound)
app.use(errorHandler)
app.use(express.json())

//Routers
app.use('/api/products', productRouter)
app.use('/api/users', userRouter)

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log('server running'))