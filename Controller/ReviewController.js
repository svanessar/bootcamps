//objecto de conexion 
const sequelize = require('../config/seq')
//DataTypes
const{DataTypes, ValidationError} =require('sequelize')
//traer el modelo
const ReviewsModel = require('../models/reviews')
//crear el objecto usuario
const Review= ReviewsModel(sequelize, DataTypes)
//gget: obtener datos 
exports.traerReview=async(req,res)=>{
    try {
        const reviews = await Review.findAll();
        res.status(200).json(
            {
                "success": true,
                "data": reviews,
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
exports.traerReviewPorId = async (req, res)=>{
    try {
        const ReviewId = await Review.findByPk(req.params.id)
        //si usuario no existe
        if(!ReviewId){
           res.status(422).json(
            {
                "success": false,
                "errors":[
                    "Review no existe"
                ]
            }
           )
        }
        res.status(200).json(
            {
                "succes" : true,
                "data" : ReviewId
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
exports.crearReview=async(req,res)=>{
    try{
        const newReview = await Review.create(req.body);
        res.status(201).json({
            "success": true,
            "data": newReview,
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
exports.actualizarReview=async (req,res)=>{
    try {
        const upReview =await Review.findByPk(req.params.id)   
        if(!upReview){
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
            await Review.update(req.body, {
                where: {
                  id: req.params.id
                }
              });  
              //seleccionar usuario actualizados
              //consultar datos actulizados 
              const ReviewACt =await Review.findByPk(req.params.id)
              //enviar response con usuario actulizado
               
    res.status(200).json(
        {
            "success": true,
            "data": ReviewACt,
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
exports.deleteReview=async (req,res)=>{
    //buscar el user 
    const u =await Review.findByPk(req.params.id)
    //borrar user por id 
    await Review.destroy({
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

