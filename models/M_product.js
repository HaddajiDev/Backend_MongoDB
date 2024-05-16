const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: String,
    descrption: String,
    price: Number,
    quantite: Number,
});

const M_product = mongoose.model("Product", ProductSchema);
module.exports = M_product;