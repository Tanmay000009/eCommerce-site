const express = require('express');

const router = express.Router();
const homeController = require('../controllers/home_controller');

console.log('router loaded');


router.get('/', homeController.home);
router.get('/about', homeController.about);
router.get('/blogDetails', homeController.blogDetails);
router.get('/blog', homeController.blog);
router.get('/productDetails/:id', homeController.productDetails);
router.get('/checkout', homeController.checkout);
router.get('/contact', homeController.contact);
router.get('/products', homeController.products);
router.get('/terms', homeController.terms);
router.get('/testimonials', homeController.testimonials);
router.get('/login', homeController.login);

router.post('/cart/add/:id',homeController.cartAdd);

router.use('/users', require('./users'));

// for any further routes, access from here
// router.use('/routerName', require('./routerfile));


module.exports = router;