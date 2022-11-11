//objecto de conexion 
const sequelize = require('../config/seq')
//DataTypes
const{DataTypes, ValidationError} =require('sequelize')
//traer el modelo
const CoursesModel = require('../models/courses')
//crear el objecto usuario
const Course= CoursesModel(sequelize, DataTypes)
//gget: obtener datos 
exports.traerCourse=async(req,res)=>{
    try {
        const Courses = await Course.findAll();
        res.status(200).json(
            {
                "success": true,
                "data": Courses,
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
exports.traerCoursePorId = async (req, res)=>{
    try {
        const CourseId = await Course.findByPk(req.params.id)
        //si Course no existe
        if(!CourseId){
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
                "data" : CourseId
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
exports.crearCourse=async(req,res)=>{
    try{
        const newCourse = await Course.create(req.body);
        res.status(201).json({
            "success": true,
            "data": newCourse,
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
exports.actualizarCourse=async (req,res)=>{
    try {
        const upCourse =await Course.findByPk(req.params.id)   
        if(!upCourse){
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
            await Course.update(req.body, {
                where: {
                  id: req.params.id
                }
              });  
              //seleccionar usuario actualizados
              //consultar datos actulizados 
              const CourseACt =await Course.findByPk(req.params.id)
              //enviar response con usuario actulizado
               
    res.status(200).json(
        {
            "success": true,
            "data": CourseACt,
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
exports.deleteCourse=async (req,res)=>{
    //buscar el user 
    const u =await Course.findByPk(req.params.id)
    //borrar user por id 
    await Course.destroy({
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

