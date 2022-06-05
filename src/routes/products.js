const express = require('express');
const router = express.Router();


const productController = require('../controllers/productController');


router.post('/add-product', productController.addProduct)
router.put('/edit-product/:id', productController.editProduct)
router.get('/get-product-by-id/:id', productController.getProductById)
router.delete('/delete-product/:id', productController.deleteProduct)
router.get('/get-products/:limit', productController.getProducts)
router.get('/get-products-by-gender/:gender', productController.getProductsByGender)
router.get('/get-products-by-type/:type', productController.getProductsByType)

module.exports = router
