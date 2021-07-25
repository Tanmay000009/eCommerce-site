const Product = require('../models/product');

module.exports.home = function(req, res){
    
    return res.render('index', {
        title: "Home",
        user: req.user
    });
}

module.exports.about = function(req,res) {
    return res.render('about-us');
}

module.exports.blogDetails = function(req,res) {
    return res.render('blog-details');
}

module.exports.blog = function(req,res) {
    return res.render('blog');
}

module.exports.productDetails = function(req,res) {
    return res.render('product-details');
}

module.exports.checkout = function(req,res) {
    return res.render('checkout');
}

module.exports.contact = function(req,res) {
    return res.render('contact');
}

module.exports.products = (req,res) => {
    // chunkSize specifies max number of elements in a row
    Product.find( (err,docs) => {
        var productChunks = [];
        var chunkSize = 3;
        for (var i=0;i<docs.length;i++) {
            productChunks.push(docs.slice(i,i+chunkSize));
        }
        res.render('products',  {products: productChunks});
    })
} 

module.exports.terms = function(req,res) {
    return res.render('terms');
}

module.exports.testimonials = function(req,res) {
    return res.render('testimonials');
}

module.exports.login = function(req,res) {
    if (req.isAuthenticated()){
        return res.redirect('/');
    }
    return res.render('login');
}