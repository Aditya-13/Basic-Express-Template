const express = require('express')
const getfood = require('../controllers/food.controller')

const food = express.Router()

food.use((req, res, next) => {
    console.log(`this is our food MIDDLEWARE ${req.baseUrl}`)
    next()
})

food.get('/' , getfood)

module.exports = food