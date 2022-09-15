const fs = require("fs");
const httpStatus = require("../constants/httpStatus");
const messages = require("../constants/messages");
const throwError = require("../helpers/throwError");
const storageRepository = require("../repositories/storageRepository");
const { uploadFile, deleteFile } = require("./aws-S3-Service");
const MEDIA_PATH = `${__dirname}/../storage`;

module.exports = {
     getItems: async (req, res) => {
          const data = await storageRepository.getItems();
          return data
     },
     getItem: async (req, res) => {
          const data = await storageRepository.getItem(req.params.id);
          if (!data) {
               return throwError(httpStatus.NOT_FOUND, messages.NOT_FOUND);
          }
          return data;
     },
     createItem: async (req, res) => {
          const { body, file } = req;
          const fileData = {
               filename: file.filename,
               url: await uploadFile(file)
          }
          body.createdAt = new Date();
          body.updatedAt = new Date();
          
          const data = await storageRepository.createItem(fileData);
          if (!data) {
               throwError(httpStatus.NOT_FOUND, messages.NOT_FOUND);
          }
          
          return data;
     },
     deleteItem: async (req, res) => {
          const dataFile = await storageRepository.getItem(req.params.id);

          if (!dataFile) {
               throwError(httpStatus.NOT_FOUND, messages.NOT_FOUND);
          }
          let { filename } = dataFile;
          let filePath = `${MEDIA_PATH}/${filename}`;
          if (fs.existsSync(filePath)) {
               fs.unlinkSync(filePath);
          }
          await deleteFile(filename)
          return await storageRepository.deleteItem(req.params.id);
     }
}