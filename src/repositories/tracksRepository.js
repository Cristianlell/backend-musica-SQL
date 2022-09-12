const db = require("../database/models");

module.exports = {
    getItems: async () => {
        return await db.Track.findAll({
            include: [
                {
                    association: "track",
                },
            ],
        });
    },
    getItem: async (id) => {
        return await db.Track.findByPk(id,{
            include: [
                {
                    association: "track",
                },
            ],
        });
    },
    createItem: async (body) => {
        return await db.Track.create(body);
    },
    updateItem: async (id, body) => {
        return await db.Track.update(body, { where: { id } });
    },
    deleteItem: async (id) => {
        return await db.Track.destroy({ where: { id } });
    },
};
