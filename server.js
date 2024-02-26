const express = require('express');
const mongoose = require('mongoose');
const Product = require("./models/product.model.js");
const productRoute = require('./routes/product_route.js')

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.use("/api/products", productRoute)



mongoose.connect('mongodb+srv://<user>:<password>@<database name lowercase>.lmbnxxf.mongodb.net/Node-API?retryWrites=true&w=majority&appName=<database name as original>')
  .then(() => {
    console.log('Connected!');
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((error) => {
    console.log(error);
  })
