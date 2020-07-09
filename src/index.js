const express = require('express')
const routes = require('./routes')
const morgan = require('morgan')
const mongoose = require('mongoose')

const app = express()

//**
/* Database setup
*/

mongoose.connect('mongodb+srv://mateus:GYJbrMSm8iM8zzJN@cluster0-bbk2g.gcp.mongodb.net/upload?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))

app.use(routes)
app.listen(3000)