'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('courses', [
      {
        title: 'software',
        description: 'sena',
        weeks:'321654',
        enroll_cost: '45',
        minimum_skill: '16',
        bootcamp_id:'1'
      },
      {
        title: ' programacion software',
        description: 'tecnologo en sistemas de informacion',
        weeks:'321654',
        enroll_cost: '15',
        minimum_skill: '16',
        bootcamp_id:'1'
      }
  ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('courses', null, {});
  }
};
