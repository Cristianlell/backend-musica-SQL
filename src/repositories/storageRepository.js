const db  = require("../database/models");

module.exports = {
     getItems: async () => {
          return await db.Storage.findAll({
               include: [
                   {
                       association: "track",
                   },
               ],
           });
     },
     getItem: async (id) => {
          return await db.Storage.findByPk(id,{
               include: [
                   {
                       association: "track",
                   },
               ],
           });
     },
     createItem: async (body) => {
          return await db.Storage.create(body);
     },
     deleteItem: async (id) => {
          return await db.Storage.destroy({ where: { id } });
     }
}