'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Courses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Courses.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isAlpha:{
        args: true,
        msg:'el title solo debe tener letras'
        } ,
        notEmpty: {
          args: true,
          msg:'title no puede ir vacio'
        },
        notNull: {
          args: true,
          msg:'title no puede ir vacio'
        },
      }
    },
    description:  {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isAlpha:{
        args: true,
        msg:'description solo debe tener letras'
        } ,
        len: {
          args: [3,20],
          msg:'description debe contener una longitud de  3 a 20'
          } ,
        notEmpty: {
          args: true,
          msg:'description no puede ir vacio'
        },
        notNull: {
          args: true,
          msg:'description no puede ir vacio'
        },
      }
    },
    weeks:  {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isNumeric:{
        args: true,
        msg:'weeks  solo debe tener solo numeros'
        } ,
        notEmpty: {
          args: true,
          msg:'weeks no puede ir vacio'
        },
        notNull: {
          args: true,
          msg:'weeks no puede ir vacio'
        },
      }
    },
    enroll_cost:{
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isNumeric:{
        args: true,
        msg:'enroll_cost solo debe tener solo numeros'
        } ,
        notEmpty: {
          args: true,
          msg:'enroll_cost no puede ir vacio'
        },
        notNull: {
          args: true,
          msg:'enroll_cost no puede ir vacio'
        },
      }
    },
    minimum_skill: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isNumeric:{
        args: true,
        msg:'minimum_skill solo debe tener solo numeros'
        } ,
        notEmpty: {
          args: true,
          msg:'minimum_skill no puede ir vacio'
        },
        notNull: {
          args: true,
          msg:'minimum_skill no puede ir vacio'
        },
      }
    },
    bootcamp_id :{
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isNumeric:{
        args: true,
        msg:' bootcamp_id solo debe tener solo numeros'
        } ,
        notEmpty: {
          args: true,
          msg:'bootcamp_id no puede ir vacio'
        },
        notNull: {
          args: true,
          msg: 'bootcamp_id no puede ir vacio'
        },
      }
    },
  }, {
    sequelize,
    modelName: 'Courses',
    timestamps: false
  });
  return Courses;
};