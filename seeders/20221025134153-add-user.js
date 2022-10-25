'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.bulkInsert('users', [
      {
        name: 'vanessa realpe',
        email: 'svrealpe@misena.edu.co',
        password:'321654'
      },
      {
        name: 'andres ',
        email: 'mandres@misena.edu.co',
        password:'123456' 
      }
  ], {});
    
  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.bulkDelete('users ', null, {});
     
  }
};
