const express = require('express')
require('dotenv').config()
const ejs = require('ejs')
const app = express()
const methodOverride = require('method-override')
const mongoose = require('mongoose')
const router = require('./routes/tasks')

app.set('view engine', 'ejs')

app.use(methodOverride('_method', {methods: ['POST', 'GET']}))
app.use(express.urlencoded({extended: true}))

mongoose.connect(process.env.MONGODB_STRING)

app.use('/', router)

app.listen(3000, ()=>{
    console.log('server is listening on port:3000')
})