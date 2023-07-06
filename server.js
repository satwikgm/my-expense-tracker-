const express = require('express')
const cors = require('cors');
const routers = require('./routes/routers')

const connectDB = require('./models/db')
connectDB();

const app = express()
app.use(express.json())
app.use(cors())

app.use('/',routers)

// app.use('/:id',routers)

app.listen(5000 , () => {
    console.log('Server started in port 5000');
})