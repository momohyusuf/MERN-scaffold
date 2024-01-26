const express = require('express');
const { signUpUser, signIn } = require('../controllers/authControllers');

const router = express.Router();

router.post('/sign-up', signUpUser);
router.post('/sign-in', signIn);

module.exports = router;
