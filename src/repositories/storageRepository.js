const db  = require("../database/models");

module.exports = {
     getItems: async () => {
          return await db.Storage.findAll();
     },
     getItem: async (id) => {
          return await db.Storage.findByPk(id);
     },
     createItem: async (body) => {
          return await db.Storage.create(body);
     },
     deleteItem: async (id) => {
          return await db.Storage.destroy({ where: { id } });
     }
}