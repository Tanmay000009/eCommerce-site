const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    items: [Object],
    totalcost: Number,
    totalitems: Number
    })

const Cart = mongoose.model('Cart',cartSchema);

module.exports = Cart;