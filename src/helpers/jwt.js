const httpStatus = require("../constants/httpStatus");
const throwError = require("../helpers/throwError");
const messages = require("../constants/messages");
const jwt = require("jsonwebtoken");
const getToken = require("./getTokenHelper");

const generateToken = (user) => {
     if (!user) {
          throwError(httpStatus.BAD_REQUEST, messages.BAD_REQUEST);
     }
     user = {
          email: user.email,
          role: user.role,
          id: user.id,
     }
     const token = jwt.sign(user, process.env.JWT_SECRET, { expiresIn: '4h' });
     return token;
}


//VALIDA SI EL TOKEN ESTA FIRMADO
const validateToken = (req) => {
     const token = getToken(req);
     if (!token) return null;
     try {
          const user = jwt.verify(token, process.env.JWT_SECRET);
          return user;
     } catch (err) {
          return null
     }
}


module.exports = { generateToken, validateToken };