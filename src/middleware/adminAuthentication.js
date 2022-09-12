const httpStatus = require("../constants/httpStatus");
const throwError = require("../helpers/throwError");
const messages = require("../constants/messages");

const adminAuthentication = (req, res, next) => {
     const { user } = req;
     if (user.role[0] === "admin" || user.role === "admin") {
          return next();
     }
     return throwError(httpStatus.FORBIDDEN, messages.FORBIDDEN)
}

module.exports = adminAuthentication