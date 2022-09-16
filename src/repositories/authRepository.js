const db = require("../database/models");

module.exports = {
    register: async (body) => {
        return await db.User.create(body);
    },

    findByEmail: async (email) => {
     return await db.User.findOne({ where: { email } });
    },

    findAll: async (email) => {
     return await db.User.findAll();
    },

    findById: async (id) => {
        return await db.User.findByPk(id);
    },
};
