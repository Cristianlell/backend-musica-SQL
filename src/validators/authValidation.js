const { check } = require("express-validator");
const validationHelper = require("../helpers/validationHelper");
const authRepository = require("../repositories/authRepository");
const httpStatus = require("../constants/httpStatus");
const throwError = require("../helpers/throwError");
const messages = require("../constants/messages");
const { comparePassword } = require("../helpers/passwordHandler");

const validatorRegister = [
     check("name").exists().notEmpty().isLength({ min: 3, max: 99 }).isString(),
     check("age").exists().notEmpty().isNumeric(),
     check("email").exists().notEmpty().isEmail().custom(async (email,{req}) => {
          const user = await authRepository.findByEmail(email);
          if (user) {
               throwError(httpStatus.BAD_REQUEST, messages.BAD_REQUEST);
          }
          
     }),
     check("password").exists().notEmpty().isString().isLength({ min: 3, max: 15 }),
     (req, res, next) => validationHelper(req, res, next)
]

const validatorLogin = [
     check("email").exists().notEmpty().isEmail().custom(async (email) => {
          const user = await authRepository.findByEmail(email);
          if (!user) {
               return throwError(httpStatus.BAD_REQUEST, messages.BAD_REQUEST);
          }
     }),
     check("password").exists().notEmpty().isString().isLength({ min: 3, max: 15 }).custom(async (value,{req}) => {

          const user = await authRepository.findByEmail(req.body.email);

          if(!user) return throwError(httpStatus.BAD_REQUEST, messages.BAD_REQUEST);
          const validPassword = await comparePassword(value,user.password);

          if(!validPassword) return throwError(httpStatus.UNAUTHORIZED, messages.UNAUTHORIZED);
     }),
     (req, res, next) => validationHelper(req, res, next)
]


module.exports = { validatorRegister, validatorLogin };