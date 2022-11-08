//objecto de conexion 
const sequelize = require('../config/seq')
//DataTypes
const{DataTypes, ValidationError} =require('sequelize')
//traer el modelo
const UserModel = require('../models/user')
//crear el objecto usuario
const User= UserModel(sequelize, DataTypes)
//gget: obtener datos 
exports.traerUser=async(req,res)=>{
    try {
        const users = await User.findAll();
        res.status(200).json(
            {
                "success": true,
                "data": users,
            }
        )
    } catch (error) {
        res
    .status(500)
    .json({
        "success":false,
        "errors": "error desconocido"
    })
    }
   
} 
//get: obtener datos por id
exports.traerUserPorId = async (req, res)=>{
    try {
        const userId = await User.findByPk(req.params.id)
        //si usuario no existe
        if(!userId){
           res.status(422).json(
            {
                "success": false,
                "errors":[
                    "usuario no existe"
                ]
            }
           )
        }
        res.status(200).json(
            {
                "succes" : true,
                "data" : userId
            }
        )
    } catch (error) {
        res
        .status(500)
        .json({
           "sucess":false,
           "errors": "error de servidor"
        })
    }
 
}

//POST : crear un nuevo recurso
exports.crearUser=async(req,res)=>{
    try{
        const newUser = await User.create(req.body);
        res.status(201).json({
            "success": true,
            "data": newUser,
           })
    }
    catch(error){
        //poner los mensajes de errores
        if(error instanceof ValidationError){
        const errores =error.errors.map((e)=> e.message)
        //llevar error a response
        res
        .status(422)
        .json({
            "success":false,
            "errors": errores
        })
       
    }
   else{
    //error servidor
    res
    .status(500)
    .json({
        "success":false,
        "errors": "error desconocido"
    })
   }
    }
}
    //Put - PATCH:actualizar
exports.actualizarUser=async (req,res)=>{
    try {
        const upUser =await User.findByPk(req.params.id)   
        if(!upUser){
            //usuario no encontrado
            res.status(422).json(
                {
                    "success": false,
                    "errors":[
                        "usuario no existe"
                    ]
                }
               )
            
        }else{
            //actualizar por id
            await User.update(req.body, {
                where: {
                  id: req.params.id
                }
              });  
              //seleccionar usuario actualizados
              //consultar datos actulizados 
              const userACt =await User.findByPk(req.params.id)
              //enviar response con usuario actulizado
               
    res.status(200).json(
        {
            "success": true,
            "data": userACt,
           }
        )
        }
    } catch (error) {
        res
        .status(500)
        .json({
           "sucess":false,
           "errors": "error de servidor"
        })
    }
    
    }
    //delete
exports.deleteUser=async (req,res)=>{
    //buscar el user 
    const u =await User.findByPk(req.params.id)
    //borrar user por id 
    await User.destroy({
        where: {
          id: req.params.id
        }
      });
      //reponse
    res.status(200).json(
        {
            "success": true,
            "data": u,
        } 
        )
}

