const { validationResult } = require("express-validator");
const httpStatus = require("../constants/httpStatus");
const messages = require("../constants/messages");
const throwError = require("../helpers/throwError");

module.exports = (req,res, next)=>{
     const errors = validationResult(req);
     if(!errors.isEmpty()){
          console.log(errors.mapped())
          return throwError(httpStatus.BAD_REQUEST,messages.BAD_REQUEST,errors.mapped())
     }
     next()

}