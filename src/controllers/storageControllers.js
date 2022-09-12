const httpStatus = require("../constants/httpStatus");
const messages = require("../constants/messages");
const { catchAsync } = require("../helpers/catchAsync")
const storageService = require("../services/storageService")

module.exports = {
     getItems: catchAsync(async (req, res) => {
          const data = await storageService.getItems();
          return res.status(httpStatus.OK).json({ success: true, message: messages.OK, body: data });
     }),
     getItem: catchAsync(async (req, res) => {
          const data = await storageService.getItem(req);
          return res.status(httpStatus.OK).json({ success: true, message: messages.OK, body: data });
     }),
     createItem: catchAsync(async (req, res) => {
          const data = await storageService.createItem(req);
          return res.status(httpStatus.CREATED).json({ success: true, message: messages.CREATED, body: data });
     }),
     deleteItem: catchAsync(async (req, res) => {
          const data = await storageService.deleteItem(req);
          return res.status(httpStatus.OK).json({ success: true, message: messages.OK, body: data });
     })
}