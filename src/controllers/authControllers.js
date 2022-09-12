const authService = require("../services/authService");
const { catchAsync } = require("../helpers/catchAsync");
const httpStatus = require("../constants/httpStatus");
const messages = require("../constants/messages");

module.exports = {
     register: catchAsync(async (req, res) => {
          const data = await authService.register(req);
          return res.status(httpStatus.CREATED).json({success:true, message: messages.CREATED, body: data });
     }),

     login: catchAsync(async (req, res) => {
          const data = await authService.login(req);
          return res.status(httpStatus.OK).json({ success:true,message: messages.OK, body: data });
     }),
}