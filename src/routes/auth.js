const express = require('express');
const router = express.Router();
const { validatorRegister, validatorLogin } = require('../validators/authValidation');
const {matchedData}= require('express-validator');
const { register,login } = require('../controllers/authControllers');

/* GET users listing. */

router.post('/login',validatorLogin ,login);

router.post('/register', validatorRegister,register);


module.exports = router;
