const Product = require('../models/product');
const User = require('../models/user');

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

module.exports.productDetails = async function(req,res) {
    var id = req.params.id;
    await Product.findOne({_id : id}, function (err,product) {
        if (err) {
            console.log('Err : ',err);
            return res.redirect('back');
        }
        return res.render('product-details',{product : product});
    }).exec();
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
        if (err) {
            res.redirect('back');
        }
        res.render('products',  {products: docs});
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

module.exports.cartAdd = async function(req,res) {
    if (req.isAuthenticated()){

        let user = await User.findByIdAndUpdate({_id : req.user._id},{ $push: { cart: req.params.id } },function(err, result) {
            if (err) {
                console.log('Error',err);
              res.redirect('back');
            } else {
              res.redirect('/checkout');
            }
          })
    } else {
        return res.render('login');
    }
    }