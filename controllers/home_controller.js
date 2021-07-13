module.exports.home = function(req, res){
    return res.render('index', {
        title: "Home"
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

module.exports.products = function(req,res) {
    return res.render('products');
}

module.exports.terms = function(req,res) {
    return res.render('terms');
}

module.exports.testimonials = function(req,res) {
    return res.render('testimonials');
}

module.exports.login = function(req,res) {
    return res.render('login');
}