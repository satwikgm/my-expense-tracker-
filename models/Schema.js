const mongoose = require('mongoose')

const SchemaTrans = new mongoose.Schema({
    text : {
        type : String,
        required: true 
    },
    amount : {
        type : Number,
        required : true
    }
})

module.exports = mongoose.model('SchemaTrans',SchemaTrans)