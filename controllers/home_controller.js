const Product = require("../models/product");
const User = require("../models/user");

module.exports.home = function (req, res) {
  return res.render("index", {
    title: "Home",
    user: req.user,
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
    let product = await Product.findOne({ _id: id })
      return res.render("product-details", { product: product });
  } catch (err) {
    console.log("Err in finding products -> productDetails ", err);
    return res.redirect("back");
  }
};

module.exports.checkout = function (req, res) {
  return res.render("checkout");
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

module.exports.cart = function (req, res) {
  return res.render("cart");
};

module.exports.login = function (req, res) {
  if (req.isAuthenticated()) {
    return res.redirect("/");
  }
  return res.render("login");
};

module.exports.cartAdd = async function (req, res) {
  try {
    if (req.isAuthenticated()) {
      let user = await User.findByIdAndUpdate(
        { _id: req.user._id },
        { $push: { cart: req.params.id } }
      );
      if (user) {
        res.redirect("back");
      }
    } else {
      return res.render("login");
    }
  } catch (err) {
    console.log("Error in finding user -> add to cart", err);
    return res.redirect("back");
  }
};
