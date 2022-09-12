const httpStatus = require("../constants/httpStatus");
const messages = require("../constants/messages");
const { catchAsync } = require("../helpers/catchAsync")
const tracksService = require("../services/tracksService")

module.exports = {
     getItems: catchAsync(async (req, res) => {
          const data = await tracksService.getItems();
          return res.status(httpStatus.OK).json({ success: true,amount:data.length, message: messages.OK, body: data});
     }),
     getItem: catchAsync(async (req, res) => {
          const data = await tracksService.getItem(req);
          return res.status(httpStatus.OK).json({ success: true, message: messages.OK, body: data });
     }),
     createItem: catchAsync(async (req, res) => {
          const data = await tracksService.createItem(req);
          return res.status(httpStatus.CREATED).json({ success: true, message: messages.CREATED, body: data });
     }),
     updateItem: catchAsync(async (req, res) => {
          const data = await tracksService.updateItem(req);
          return res.status(httpStatus.CREATED).json({ success: true, message: messages.CREATED, body: data });
     }),
     deleteItem: catchAsync(async (req, res) => {
          const data = await tracksService.deleteItem(req);
          return res.status(httpStatus.OK).json({ success: true, message: messages.OK, body: data });
     })
}