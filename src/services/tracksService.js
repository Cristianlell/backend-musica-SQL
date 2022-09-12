const { matchedData } = require("express-validator");
const httpStatus = require("../constants/httpStatus");
const messages = require("../constants/messages");
const throwError = require("../helpers/throwError");
const tracksRepository = require("../repositories/tracksRepository");

module.exports = {
     getItems: async (req, res) => {
          const data = await tracksRepository.getItems();
          if (!data) {
               return throwError(httpStatus.NOT_FOUND, messages.NOT_FOUND);
          }
          return data;
     },
     getItem: async (req, res) => {
          const data = await tracksRepository.getItem(req.params.id);
          if (!data) {
               return throwError(httpStatus.NOT_FOUND, messages.NOT_FOUND);
          }
          return data;
     },
     createItem: async (req, res) => {
          req = matchedData(req); // Evita que llegue data basura
          req.createdAt = new Date();
          req.updatedAt = new Date();
          const data = await tracksRepository.createItem(req);
          if (!data) {
               return throwError(httpStatus.NOT_FOUND, messages.NOT_FOUND);
          }
          return data;
     },
     updateItem: async (req, res) => {
          const cleanData = matchedData(req); // Evita que llegue data basura
          const data = await tracksRepository.updateItem(req.params.id, cleanData);
          if (!data) {
               return throwError(httpStatus.NOT_FOUND, messages.NOT_FOUND);
          }
          return data;
     },
     deleteItem: async (req, res) => {
          const findById = await tracksRepository.getItem(req.params.id);
          if (!findById) {
               return throwError(httpStatus.NOT_FOUND, messages.NOT_FOUND);
          }
          const data = await tracksRepository.deleteItem(req.params.id);
          return data;
     }
}