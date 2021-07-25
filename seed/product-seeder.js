const Product = require('../models/product');

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/ecommercee');

var products = [
    new Product({
        imgPath: "assets/images/product-1-370x270.jpg",
        name: "Lorem ipsum dolor sit amet.",
        price: "$779.00",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dicta voluptas quia dolor fuga odit."
    }),
    new Product({
        imgPath: "assets/images/product-2-370x270.jpg",
        name: "Lorem ipsum dolor sit amet.",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dicta voluptas quia dolor fuga odit.",
        price: "$79.00"
    }),
    new Product({
        imgPath: "assets/images/product-3-370x270.jpg",
        name: "Lorem ipsum dolor sit amet.",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dicta voluptas quia dolor fuga odit.",
        price: "$1779.00"
    }),
    new Product({
        imgPath: "assets/images/product-4-370x270.jpg",
        name: "Lorem ipsum dolor sit amet.",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dicta voluptas quia dolor fuga odit.",
        price: "$779.00"
    }),
    new Product({
        imgPath: "assets/images/product-5-370x270.jpg",
        name: "Lorem ipsum dolor sit amet.",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dicta voluptas quia dolor fuga odit.",
        price: "$79.00"
    }),
    new Product({
        imgPath: "assets/images/product-6-370x270.jpg",
        name: "Lorem ipsum dolor sit amet.",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dicta voluptas quia dolor fuga odit.",
        price: "$1779.00"
    })
]


// here saving products to database is asynchronus, hence using done.

var done =0;
for (var i=0;i< products.length;i++) {
    products[i].save(function(err,result) {
        done++;
        if (done == products.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}