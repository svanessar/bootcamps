'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isAlpha:{
        args: true,
        msg:'el nombre solo debe tener letras'
        } ,
        notEmpty: {
          args: true,
          msg:'no puede ir vacio'
        },
        notNull: {
          args: true,
          msg:'no puede ir vacio'
        },
      }
    },
    email:  {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail:{
        args: true,
        msg:'debe contener estructura email'
        } ,
        notEmpty: {
          args: true,
          msg:'no puede ir vacio'
        },
        notNull: {
          args: true,
          msg:'no puede ir vacio'
        },
      }
    },
    password:{
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: {
        args: [5,10],
        msg:'el password debe contener una longitud de 5 a 10'
        } ,
        notEmpty: {
          args: true,
          msg:'no puede ir vacio'
        },
        notNull: {
          args: true,
          msg:'no puede ir vacio'
        },
      }
    },
  }, {
    sequelize,
    modelName: 'User',
    timestamps: false
  });
  return User;
};