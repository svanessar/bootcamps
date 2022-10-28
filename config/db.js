const sequelize = require ('./seq')
const colors = require('colors')

//crear  funcion asyncrona para conexion
const connectDB = async ()=>{
    try{
        await sequelize.authenticate()
        console.log("conexion establecida exitosamente".bgMagenta.white)

    } catch(error){
        console.error(error)
    }
    
}

module.exports = connectDB