const express = require('express')
const dotenv = require('dotenv')
const collors = require('colors')
const listenEndpoints =require('express-list-endpoints')
//dependencias
const bootcampsRoutes =require('./routes/BootcampsRoutes')
const userRoutes =require('./routes/UserRoutes')
const courseRoutes =require('./routes/CourseRouter')
const reviewRoutes =require('./routes/ReviewRouter')

const connectDB = require('./config/db')
//establecer el archivo de configuracion con variables de entono
dotenv.config({
    path:'./config_env/config.env'
})

//1.Crear el Objeto app 
const app =express()
app.use(express.json())

connectDB()
app.use('/api/v1/bootcamps', bootcampsRoutes )
app.use('/api/v1/user', userRoutes )
app.use('/api/v1/course', courseRoutes )
app.use('/api/v1/review', reviewRoutes )
//crear rutas (endpoint, url) para bootcamps
//get: obtener datos reaad

console.log(listenEndpoints(app))

//3.metodo listen:ejecutar servidor
app.listen(process .env.port, ()=>{
    console.log(`Servidor Iniciado en puerto: ${process.env.port}`.bgBlack.blue)

})

