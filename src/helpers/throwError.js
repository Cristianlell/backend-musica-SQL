const httpStatus = require("../constants/httpStatus");
const messages = require("../constants/messages");

module.exports = (status, message, body) => {
     const errorToThrow = new Error();
     errorToThrow.customError = { status,success:false, message, body };

     if (![status, message].every(Boolean)) {

          errorToThrow.customError = {
               status:httpStatus.INTERNAL_SERVER_ERROR,
               success:false,
               message: messages.INTERNAL_SERVER_ERROR,
               body: messages.INTERNAL_SERVER_ERROR,
          };
     }

     throw errorToThrow;
};