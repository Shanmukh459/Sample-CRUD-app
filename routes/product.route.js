const express = require('express')
const { getAllProducts, getProduct, addProduct, deleteProduct, updateProduct } = require('../controllers/products.controller')
const router = express.Router()

router.get('/', getAllProducts)
router.get('/:id', getProduct)

//Adding a product
router.post('/', addProduct)

//update a product
router.put('/:id', updateProduct)

//delete a product
router.delete('/:id', deleteProduct)

module.exports = router