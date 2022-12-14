'use strict';

const { QueryInterface } = require('sequelize');
const sequelize = require('../config/seq');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('bootcamps',
                                   'user_id',
                                   {
                                     type: Sequelize.INTEGER,
                                     references:{
                                       model:'users',
                                       key:'id'
                                     },
                                     onUpdate: 'CASCADE',
                                     onDelete:'SET NULL'
                                                        })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('bootcamps' , 
                                     'user_id'
                                     )
  }
};
