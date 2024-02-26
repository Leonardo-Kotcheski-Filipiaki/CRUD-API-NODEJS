const Product = require("../models/product.model");


/**
 * Find all products
 */

const getProducts = async(req, res) => {
    try{
        const product = await Product.find();
    
        res.status(200).json(product);
      } catch (error) {
        res.status(500).send('Bad Request');
      }
}

/**
 * Find products by their id
 */
const getProductById = async (req, res) => {
    try{
      const {id} = req.params;
  
      const product = await Product.findById(id);
  
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json({
        message: error.message
      });
    }
}

/**
 * Create Product
 */
const createProduct = async(req, res) => {
    try{
      if(!req.body){
        return res.status(400).json({
          message: "Missing body parameters"
        })
      }
      const product = await Product.create(req.body);
  
      res.status(200).json(product);
    } catch (error) {
      res.status(500).send('Bad Request');
    }
}

/**
 * Update product
 */
const updateProduct = async(req, res) => {
  try{
    const {id} = req.params;

    const product = await Product.findByIdAndUpdate(id, req.body);
  
    if(!product) {
      return res.status(404).send("Product not find!");
    }
    
    const updatedProduct = await Product.findById(id);

    res.json(updatedProduct);
    res.sendStatus(200);

  }catch(error){
    res.status(500).json({
      message: error.message
    })
  }
}

/**
 * Delete a product based on his id
 */
const deleteProduct = async(req, res) => {
  try{
    const {id} = req.params;

    const product = await Product.findByIdAndDelete(id);

    if(!product){
      return res.status(404).json({
        message: "Product not found"
      })
    }
    
    res.send(product);
  }catch(error){
    res.json({
      message: error.message,
      code: 500
    }).status(500)
  }
}


module.exports = {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
}