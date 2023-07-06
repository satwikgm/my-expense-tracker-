const SchemaTrans = require('../models/Schema')

exports.getTransactions = async (req,res,next) => {
    try {
        const transactions = await SchemaTrans.find()
        return res.json({
            data : transactions
        })
    } catch (err) {
        return res.json({
            message: err.message,
        })
    }
}

exports.addTransactions = async (req,res,next) => {
    try {
        const { text , amount } = req.body;
        const trans = await SchemaTrans.create(req.body)
        return res.json({
            message : "Added Transaction",
            transaction : trans
        })
    } catch (err) {
        return res.json({
            message: err.message,
        })
    }
}

exports.deleteTransactions = async (req,res,next) => {
    try {
        const toDel = await SchemaTrans.findByIdAndDelete(req.params.id);
        if(!toDel) {
            return res.json({
                message: "No such transaction found",
            })
        }
        return res.json({
            message : "Transaction deleted",
            data : {}
        })
    } catch (err) {
        return res.json({
            message: err.message,
        })
    }
}