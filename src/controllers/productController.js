const Product = require('../models/Product');

const addProduct = async (req, res) => {
    try {
        const data = { ...req.body }
        if (!data.name || !data.image1 || !data.description || !data.priceCurrent || !data.quantity) {
            res.status(500).json({
                message: "Missing params..."
            })
        }

        const newProduct = new Product(data)
        const response = await newProduct.save()
        if (response) {
            res.status(200).json({
                message: "Add product success..."
            })
        }
    } catch (error) {
        console.log(error)
        res.status(200).json({
            message: "Error from server..."
        })
    }
}

const deleteProduct = async (req, res) => {
    try {
        const id = req.params.id
        const response = await Product.deleteOne({ _id: id })
        if (response) {
            res.status(200).json({
                message: "Delete product success..."
            })
        }
    } catch (error) {
        console.log(error)
        res.status(200).json({
            message: "Error from server..."
        })
    }
}

const editProduct = async (req, res) => {
    try {
        const id = req.params.id
        const response = await Product.updateOne({ _id: id }, req.body)

        if (response) {
            res.status(200).json({
                message: "Edit product success..."
            })
        }

    } catch (error) {
        console.log(error)
        res.status(200).json({
            message: "Error from server..."
        })
    }
}

const getProducts = async (req, res) => {
    try {
        const limit = req.params.limit
        let products
        if (limit === 'all') {
            products = await Product.find({})
            res.status(200).json({
                message: "Get product success...",
                products
            })
        } else {
            products = await Product.find({}).limit(limit)
            res.status(200).json({
                message: "Get product success...",
                products
            })
        }

    } catch (error) {
        console.log(error)
        res.status(200).json({
            message: "Error from server..."
        })
    }
}

const getProductById = async (req, res) => {
    try {
        const id = req.params.id
        const product = await Product.findOne({ _id: id })
        if (product) {
            res.status(200).json({
                message: "Get product success...",
                product
            })
        }
    } catch (error) {
        console.log(error)
        res.status(200).json({
            message: "Error from server..."
        })
    }
}


const getProductsByGender = async (req, res) => {
    try {
        const gender = req.params.gender

        const products = await Product.find({ forGender: gender })
        if (products) {
            res.status(200).json({
                message: "Get product success...",
                products
            })
        }

    } catch (error) {
        console.log(error)
        res.status(200).json({
            message: "Error from server..."
        })
    }
}


const getProductsByType = async (req, res) => {
    try {
        const type = req.params.type

        const products = await Product.find({ type: type })
        if (products) {
            res.status(200).json({
                message: "Get product success...",
                products
            })
        }

    } catch (error) {
        console.log(error)
        res.status(200).json({
            message: "Error from server..."
        })
    }
}
module.exports = {
    addProduct,
    editProduct,
    deleteProduct,
    getProducts,
    getProductsByGender,
    getProductById,
    getProductsByType
}