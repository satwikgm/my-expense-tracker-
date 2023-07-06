const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const conn = await mongoose.connect("mongodb+srv://satwiklgm:Tqt6S7XbbszysoQJ@cluster0.pisxybd.mongodb.net/?retryWrites=true&w=majority")
        console.log('Mongo DB  connected');
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
}

module.exports = connectDB;