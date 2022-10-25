const sequelize = require('./seq')
const colors = require('colors')
//dependencia ala funcion para crear modelo
const UserModel = require('../models/user')
//dependencia a DataTypes
const{DataTypes}=require('sequelize')
//crear el modelo 
const User =UserModel( sequelize, DataTypes)
//crear funcion asyncrona para conexion
const connectDB = async()=>{
    try{
        await sequelize.authenticate()
        console.log('conexion establecida exitosamente'.bgMagenta.white)
        //seleccionar los user
       // const users = await User.findAll();
        //console.log(users)
        //crear user
        //const jane = await User.create({ name: "Jane", email: "Jane@gmail.com", password:"1234" });
        //console.log("Jane's auto-generated ID:", jane.id);
    }
    catch(error){
        console.log(error)

    }
  
}
//ejecutar la funcion
connectDB()