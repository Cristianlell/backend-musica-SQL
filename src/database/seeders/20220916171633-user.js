'use strict';
let users = [
  {
    name: "admin",
    age: 28,
    email: "admin@test.com",
    password: "admin",
    createdAt: new Date(),
    updatedAt:new Date()
  },
  {
    name: "user",
    age: 28,
    email: "user@test.com",
    password: "user",
    createdAt: new Date(),
    updatedAt:new Date()
  }
];
module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.bulkInsert('Users', users, {});
    
  },

  async down (queryInterface, Sequelize) {
    
     Example:
     await queryInterface.bulkDelete('Users', null, {});
     
  }
};
