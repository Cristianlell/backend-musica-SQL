"use strict";
let storages = [
    {
        url: "https://test-backend-musica.s3.sa-east-1.amazonaws.com/file-16624980833142.png",
        filename: "file-16624980833142.png",
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        url: "https://test-backend-musica.s3.sa-east-1.amazonaws.com/file-16624980833142.png",
        filename: "file-16624980833142.png",
        createdAt: new Date(),
        updatedAt: new Date(),
    },
];
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert("Storages", storages, {});
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("Storages", null, {});
    },
};
