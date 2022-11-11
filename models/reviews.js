'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reviews extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Reviews.init({
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
    text: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isAlpha:{
        args: true,
        msg:'el text solo debe tener letras'
        } ,
        notEmpty: {
          args: true,
          msg:'text no puede ir vacio'
        },
        notNull: {
          args: true,
          msg:'text no puede ir vacio'
        },
      }
    },
    rating: {
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
    bootcamp_id :{
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isNumeric:{
        args: true,
        msg:'bootcamp_id  solo debe tener solo numeros'
        } ,
        notEmpty: {
          args: true,
          msg:'bootcamp_id no puede ir vacio'
        },
        notNull: {
          args: true,
          msg:'bootcamp_id no puede ir vacio'
        },
      }
    },
    user_id : {
      type: DataTypes.INTEGER,
      validate: {
        isNumeric:{
          args: true,
         msg:'user_id  solo debe tener solo numeros'
        } 
      }
    },
  }, {
    sequelize,
    modelName: 'Reviews',
    timestamps: false
  });
  return Reviews;
};