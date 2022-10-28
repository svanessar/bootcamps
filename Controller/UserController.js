//objecto de conexion 
const sequelize = require('../config/seq')
//DataTypes
const{DataTypes} =require('sequelize')
//traer el modelo
const UserModel = require('../models/user')
//crear el objecto usuario
const User= UserModel(sequelize, DataTypes)

exports.traerUser=async(req,res)=>{
    const users = await User.findAll();
    res.status(200).json(
        {
            "success": true,
            "data": users,
        }
    )
} 
exports.traerUserPorId=async(req,res)=>{
    const userId=User.findByPk(req.params.id)
    res.status(200).json(
        {
            "success": true,
            "data": userId,
        }
    )
} 

//POST : crear un nuevo recurso
exports.crearUser=async(req,res)=>{
    const newUser = await User.create(req.body);
    res.status(201).json(
       {
        "success": true,
        "data": newUser,
       }
    )
    }
    //Put - PATCH:actualizar
exports.actualizarUser=async (req,res)=>{
    await User.update(req.body, {
        where: {
          id: req.params.id
        }
      });
      //consultar datos actualizados
      const upUser =await User.findByPk(req.params.id)
    res.status(200).json(
        {
            "success": true,
            "data": upUser,
           }
        )
    }
    //delete
exports.deleteUser= (req,res)=>{
    res.status(200).json(
        {
            "message" : `aqui se va a eliminar el usuario por id :${req.params.id}`
        } 
        )
}

