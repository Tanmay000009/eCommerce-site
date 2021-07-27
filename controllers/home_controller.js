const Product = require("../models/product");
const User = require("../models/user");

module.exports.home = function (req, res) {
  Product.find((err, docs) => {
    if (err) {
      console.log("Error in getting products -> homeProducts",err);
      res.redirect("back");
    }
    res.render("index", { title: "Home",
    user: req.user,products: docs });
  });
};

module.exports.about = function (req, res) {
  return res.render("about-us");
};

module.exports.blogDetails = function (req, res) {
  return res.render("blog-details");
};

module.exports.blog = function (req, res) {
  return res.render("blog");
};

module.exports.productDetails = async function (req, res) {
  try {
    var id = req.params.id;
    let product = await Product.findOne({ _id: id });
    return res.render("product-details", { product: product });
  } catch (err) {
    console.log("Err in finding products -> productDetails ", err);
    return res.redirect("back");
  }
};

module.exports.checkout = async function (req, res) {
    try {
        if (req.isAuthenticated()) {
          var id = req.user._id;
          let user = await User.findOne({ _id: id });
            var prodDetails = [];
            var totalCount=0;
        var total=0;
        var temp;
          for (var i=0;i<user.cart.length;i++) {
            try {
                var id = user.cart[i];
                let product = await Product.findOne({ _id: id });
                temp = product.price.slice(1,);
                total += (Number(temp)*user.count[i]);
                totalCount += (1*user.count[i]);
                product.itemPrice = (Number(temp)*user.count[i]);
                product.count = user.count[i];
                prodDetails.push(product);
                
              } catch (err) {
                console.log("Err in finding products -> cart ", err);
                return res.redirect("back");
              }
          }
    
          return res.render("checkout", { cart: prodDetails, total : total,totalCount : totalCount });
        } else {
          return res.render("login");
        }
      } catch (err) {
        console.log("Err in finding user -> cart ", err);
        return res.redirect("back");
      }
};

module.exports.contact = function (req, res) {
  return res.render("contact");
};

module.exports.products = (req, res) => {
  // chunkSize specifies max number of elements in a row
  Product.find((err, docs) => {
    if (err) {
      res.redirect("back");
    }
    res.render("products", { products: docs });
  });
};

module.exports.terms = function (req, res) {
  return res.render("terms");
};

module.exports.testimonials = function (req, res) {
  return res.render("testimonials");
};

module.exports.login = function (req, res) {
  if (req.isAuthenticated()) {
    return res.redirect("/");
  }
  return res.render("login");
};

module.exports.cartAdd = async function (req, res) {
  var productId = req.params.id;
  var quantity = req.body.quantity;
  
  try {
    if (req.isAuthenticated()) {
      let user = await User.findById(
        { _id: req.user._id }
      );
      if (user) {
        var cart = user.cart;
        var count = user.count;
        if (cart.includes(productId)) {
          var i = cart.findIndex(product => product === productId);
          count[i] = Number(count[i]) + Number(quantity);
          console.log(count[i]);
        } else {
          cart.push(productId);
          count.push(Number(quantity));
        }
        user.cart = cart;
        user.count = count;
        user.save();
        res.redirect("back");
      }
      // id = req.user._id;
      // let cart = await Cart.findById({id : id});
      // var temp = cart.items[0];
      // temp.id = {name: "abc", qty: 0,price : 0};
      // cart.items[0] = temp;
      // cart.save();
    } else {
      return res.render("login");
    }
  } catch (err) {
    console.log("Error in finding user -> add to cart", err);
    return res.redirect("back");
  }
};
