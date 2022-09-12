const { matchedData } = require("express-validator");
const httpStatus = require("../constants/httpStatus");
const throwError = require("../helpers/throwError");
const messages = require("../constants/messages");
const { hashPassword } = require("../helpers/passwordHandler");
const authRepository = require("../repositories/authRepository");
const { generateToken } = require("../helpers/jwt");

module.exports = {
     register: async (req, res) => {

          req = matchedData(req);
          console.log(req)
          req.password = await hashPassword(req.password);
         
          const user = await authRepository.register(req);

          const response = {
               name: user.name,
               email: user.email,
               role: user.role,
               id: user.id
          }
          response.token = generateToken(response);
          return response;
     },

     login: async (req, res) => {
          req = matchedData(req);
          const user = await authRepository.findByEmail(req.email);
          const response = {
               name: user.name,
               email: user.email,
               role: user.role,
               id: user.id,
          }
          response.token = generateToken(response);
          return response;

     }
}