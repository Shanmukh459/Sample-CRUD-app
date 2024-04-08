const Product = require('../models/product.model')

const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({})
        res.status(200).json(products)
    }catch(e) {
        res.status(500).json({message: e.message})
    }
}

const getProduct = async (req, res) => {
    try {
        const { id } = req.params
        const product = await Product.findById(id)
        res.status(200).json(product)

    } catch(e) {
        res.status(500).json({message: e.message})
    }
}

const addProduct = async (req, res) => {
    try{
        const product = await Product.create(req.body)
        res.status(200).json(product)
    }catch(e) {
        res.status(500).json({message: e.message})
    }
}

const updateProduct = async (req, res) => {
    try {
        const { id } = req.params
        const product = await Product.findByIdAndUpdate(id, req.body)
        if (!product) {
            return res.status(404).json({message: "Product not found"})
        }

        const updatedProduct = await Product.findById(id)
        res.status(200).json(updatedProduct)

    } catch(e) {
        res.status(500).json({message: e.message})
    }
}

const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params
        const product = await Product.findByIdAndDelete(id)
        
        if(!product) {
            return res.status(404).json({ message: "Product not found!"})
        }
        const products = await Product.find({})
        res.status(200).json({ message: "Product deleted successfully!"})

    } catch(e) {
        res.status(500).json({ message: e.message })
    }
}

module.exports = {
    getAllProducts,
    getProduct,
    addProduct,
    updateProduct,
    deleteProduct
}