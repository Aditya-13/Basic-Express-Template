const model = require('../models/products.model')

const getProducts = function(req, res){
    res.json(model)
}


const addProducts = function(req, res){
    if (!req.body.product){
        return res.status(400).json({
            error : 'Product name missing'
        })
    }
    const newProduct = {
        'product id' : (model.length + 1),
        'product name' : req.body.product
    }
    model.push(newProduct)
    res.json(newProduct)
}

module.exports = {
    addProducts,
    getProducts
}

