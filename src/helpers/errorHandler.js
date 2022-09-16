const httpStatus = require("../constants/httpStatus");
const messages = require("../constants/messages.js");

const hasCustomError = (err) => typeof err.customError !== "undefined";
let errorToSend = {};

const errorHandler = (err, req, res) => {

     if (!hasCustomError(err)) {

          errorToSend = {
               status: err.status || httpStatus.INTERNAL_SERVER_ERROR,
               success: false,
               message:
                    err.status === httpStatus.NOT_FOUND
                         ? messages.NOT_FOUND
                         : messages.INTERNAL_SERVER_ERROR,
               body: err.message,
          };
          return res.status(errorToSend.status).json(errorToSend);
     }


     errorToSend = {
          status: err.customError.status || httpStatus.INTERNAL_SERVER_ERROR,
          success: false,
          message: err.customError.message,
          rawMessage: err.customError.body,
     };
     return res.status(errorToSend.status).json(errorToSend);
};


module.exports = {
     errorHandler,
};