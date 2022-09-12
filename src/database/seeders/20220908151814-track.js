"use strict";
let tracks = [];

for (let i = 0; i < 10; i++) {
    tracks.push({
        name: "Cristian",
        album: "album",
        cover: "http://tttt.com",
        artist_name: "Cristian Lell",
        artist_nickname: "CristianLell",
        artist_nationality: "Argentina",
        duration_start: 0,
        duration_end: 3,
        mediaId: Math.ceil(Math.random() * 2),
        createdAt:new Date(),
        updatedAt:new Date()
    });
}

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert("Tracks", tracks, {});
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("Tracks", null, {});
    },
};
