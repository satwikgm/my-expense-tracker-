const SchemaTrans = require('../models/Schema')
const LoginSchema = require('../models/LoginSchema')
const SignupSchema = require('../models/SignupSchema')
// const { default: Signup } = require('../client/src/pages/SignupPage')


// Landing Page
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


// Login User
exports.getUser = async (req,res,next) => {
    try {
        const users = await LoginSchema.find();
        return res.json({
            message : "List of Users",
            users : users
        })
    } catch (err) {
        return res.json({
            message: err.message,
        })
    }
}

exports.postUser = async (req,res,next) => {
    try {
        const { username , password } = req.body;
        const data = await LoginSchema.findOne({ username : username });
        if(data) {
            if(password == data.password) {
                console.log('Logged In');
                return res.json({
                    message : "correct"
                })
            } else {
                console.log('Invalid Password');
                return res.json({
                    message : "InvalidPassword",
                })
            }
        } else {
            console.log('User not found');
            return res.json({
                message : "User not found"
            })
        }
    } catch (err) {
        console.log('Error');
        return res.json({
            message: err.message,
        })
    }
}

// Signup User
exports.postSignup = async (req,res,next) => {
    try {
        const { username , password } = req.body;
        const data = await SignupSchema.findOne({username:username})
        if(data) {
            return res.json({
                message : "User already exists"
            })
        } else {
            const user = await SignupSchema.create(req.body)
            const user2 = await LoginSchema.create(req.body)
            return res.json({
                message: "AddedUser",
                user: user
            })
        }
    } catch (error) {
        console.log('Error');
        return res.json({
            message: err.message,
        })
    }
}