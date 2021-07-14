const express = require('express');

const router = express.Router();
const userContoller = require('../controllers/users_controllers');

router.post('/sign-in',userContoller.createSession);
router.post('/sign-up',userContoller.create);

module.exports = router;