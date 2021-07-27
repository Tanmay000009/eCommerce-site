const User = require('../models/user');

module.exports.createSession = function(req, res){
    return res.redirect('/');
}

module.exports.destroySession = function(req, res){
    req.logout();
    return res.redirect('/');
}

module.exports.create = function(req,res) {
    if (req.body.password != req.body.cpassword) {
        return res.redirect('back');
    }

    User.findOne({email: req.body.email}, function(err,user) {
        if (err) {
            console.log('Error in finging user -> Sign Up',err);
            return res.redirect('back');
        }
        if (user) {
            return res.render('login');
        }
        User.create(req.body, function(err, user){
            if(err){req.flash('error', err); return}
            
            return res.render('login');
        })
    })
}