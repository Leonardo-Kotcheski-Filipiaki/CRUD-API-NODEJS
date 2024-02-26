const express = require('express');
const router = express.Router();
const { getProducts, getProductById, createProduct, updateProduct, deleteProduct } = require('../controller/product_controller.js')

/**
 * Find all products
 */

router.get("/", getProducts);

/**
 * Find products by their id
 */
router.get('/:id', getProductById);

/**
 * Create Product
 */
router.post('/', createProduct);

/**
 * Update product
 */
router.put('/:id', updateProduct);

/**
 * Delete a product based on his id
 */
router.delete('/:id', deleteProduct);


module.exports = router;