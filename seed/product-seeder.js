const Product = require("../models/product");

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/ecommercee");

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));


db.once('open', function(){
    console.log('Connected to Database :: MongoDB');
});



var products = [
  new Product({
    imgpath: "assets/images/product-1-370x270.jpg",
    name: "Lorem ipsum dolor sit amet.",
    price: "$779.00",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dicta voluptas quia dolor fuga odit.",
  }),
  new Product({
    imgpath: "assets/images/product-2-370x270.jpg",
    name: "Lorem ipsum dolor sit amet.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dicta voluptas quia dolor fuga odit.",
    price: "$79.00",
  }),
  new Product({
    imgpath: "assets/images/product-3-370x270.jpg",
    name: "Lorem ipsum dolor sit amet.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dicta voluptas quia dolor fuga odit.",
    price: "$1779.00",
  }),
  new Product({
    imgpath: "assets/images/product-4-370x270.jpg",
    name: "Lorem ipsum dolor sit amet.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dicta voluptas quia dolor fuga odit.",
    price: "$779.00",
  }),
  new Product({
    imgpath: "assets/images/product-5-370x270.jpg",
    name: "Lorem ipsum dolor sit amet.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dicta voluptas quia dolor fuga odit.",
    price: "$79.00",
  }),
  new Product({
    imgpath: "assets/images/product-6-370x270.jpg",
    name: "Lorem ipsum dolor sit amet.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dicta voluptas quia dolor fuga odit.",
    price: "$1779.00",
  }),
];

seeder(products);

async function seeder(products) {
  let seeded = await Product.create(products);
  exit();
}

function exit() {
  mongoose.disconnect();
}
