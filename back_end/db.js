const mongoose = require('mongoose');


const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true
        })
        console.log('MongoDB connected..')
    } catch (error) {
        console.log(error.message)
        process.exit(1)
    }
}

module.exports = connectDB;