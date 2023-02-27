const express = require('express')
const { addProducts, getProducts } = require('../controllers/products.controller')

const products = express.Router()

products.use((req, res, next) => {
    console.log(req.url , req.method)
    next()
})

products.get('/' , getProducts)

products.post('/addnew' , addProducts)

module.exports = products