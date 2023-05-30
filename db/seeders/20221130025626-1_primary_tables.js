"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert("fruits", [
      {
        name: "Apple",
        taste: "Sweet",
        colour: "Red",
        stock: 140,
        price: 15,
      },
      {
        name: "Kiwi",
        taste: "Sweet",
        colour: "The kiwis have a nice balaence of sweet and sour",
        stock: 120,
        price: 20,
      },
      {
        name: "Banana",
        taste: "Sweet",
        colour: "Yellow",
        stock: 140,
        price: 10,
      },
    ]);

    await queryInterface.bulkInsert("users", [
      { email: "sam@sam.com", password: "12345" },
      { email: "foong@foong.com", password: "password" },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete("fruits");
    await queryInterface.bulkDelete("users");
  },
};
