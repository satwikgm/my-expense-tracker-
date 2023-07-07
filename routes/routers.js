const express = require('express')
const { getTransactions , addTransactions, deleteTransactions , getUser , postUser , postSignup } = require('../controllers/controllers')

const router = express.Router()

router
    .route('/')
    .get(getTransactions)
    .post(addTransactions)

router
    .route('/login')
    .get(getUser)
    .post(postUser)

router
    .route('/signup')
    .post(postSignup)

router
    .route('/:id')
    .delete(deleteTransactions)

module.exports = router