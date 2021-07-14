const express = require('express');
const passport = require('passport');

const router = express.Router();
const userContoller = require('../controllers/users_controllers');


router.post('/sign-up',userContoller.create);

// using passport as a middleware to authenticate
router.post('/sign-in',passport.authenticate('local', { failureRedirect: '/login' }),userContoller.createSession);

router.get('/logout',userContoller.destroySession);

module.exports = router;