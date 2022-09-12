const { validateToken } = require("../helpers/jwt")
const httpStatus = require("../constants/httpStatus");
const throwError = require("../helpers/throwError");
const messages = require("../constants/messages");

const session = (req,res,next) => {
     const payload = validateToken(req);
     if (payload === null) return throwError(httpStatus.UNAUTHORIZED, messages.UNAUTHORIZED)
     req.user = payload;

     return next()
}

module.exports = session ;