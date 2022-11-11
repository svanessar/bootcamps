'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('reviews', [
      {
        title:"vista",
        text:"texto",
        rating:"23",
        bootcamp_id:"1",
        user_id :"3"
      },
      {
        title:"vista",
        text:"texto",
        rating:"23",
        bootcamp_id:"1",
        user_id :"3"
      }
  ], {});
  },




  

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('reviews', null, {});
  }
};
