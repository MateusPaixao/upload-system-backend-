require('dotenv').config()

const express = require('express')
const routes = require('./routes')
const morgan = require('morgan')
const mongoose = require('mongoose')

const app = express()

//**
/* Database setup
*/

mongoose.connect(process.env.MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))

app.use(routes)
app.listen(3000)