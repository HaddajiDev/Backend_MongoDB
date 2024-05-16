const express = require('express');
const M_product = require('../models/M_product');

const productRouter = express.Router();

//add product
productRouter.post("/add", async function(request, result) {
    try {
        let newProduct = new M_product(request.body);
        await newProduct.save();
        result.send({ msg: "product added" });
    } catch (error) {
        console.log(error);
    }
});

//get all product
productRouter.get("/", async function(request, result) {
    try {
        let products = await M_product.find();
        result.send({ products: products });
    } catch (error) {
        console.log(error);
    }
});

//get one product
productRouter.get('/:id', async function(request, result) {
    try {
        let product = await M_product.findById(request.params.id);
        result.send({ product: product });
    } catch (error) {
        console.log(error);
    }
});


productRouter.put('/:id', async function(request, result) {
    try {
        await M_product.findByIdAndUpdate({ _id: request.params.id }, { $set: {...request.body } });
        result.send({ msg: "user updated" });
    } catch (error) {
        console.log(error);
    }
})


//delete product
productRouter.delete("/:id", async function(request, result) {
    try {
        await M_product.findByIdAndDelete(request.params.id);
        result.send({ msg: "Product deleted" });
    } catch (error) {
        console.log(error);
    }
})

module.exports = productRouter;