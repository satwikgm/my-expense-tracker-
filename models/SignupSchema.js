const mongoose = require('mongoose')

const SignupSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required: true
    }
})

module.exports = mongoose.model('SignupSchema' , SignupSchema)