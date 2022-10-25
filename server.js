const express = require('express')
const dotenv = require('dotenv')
const collors = require('colors')

//dependencias
const bootcampsRoutes =require('./routes/BootcampsRoutes')
const userRoutes =require('./routes/UserRoutes')
//establecer el archivo de configuracion con variables de entono
dotenv.config({
    path:'./config_env/config.env'
})

//1.Crear el Objeto app 
const app =express()

app.use('api/v1/bootcamps', bootcampsRoutes )
app.use('api/v1/user', userRoutes )
//crear rutas (endpoint, url) para bootcamps
//get: obtener datos reaad
app.get('/api/v1/bootcamps',(req,res)=>{
    res.status(200).json(
        {
            "message" : "aqui se van a mostrar todos los bootcamps"
        }
    )
} )
//obtener recurso por id
app.get('/api/v1/bootcamps/:id',(req, res)=>{
    res.status(200).json(
        {
            "message" : `aqui se van a mostrar todos los bootcamps cuyo is es:${req.params.id}`
        }
    )
})
//POST : crear un nuevo recurso
app.post('/api/v1/bootcamps',(req,res)=>{
    res.status(201).json(
        {
            "menssage": "aqui va a crear el bootcamps "
        }
    )
})

//Put - PATCH:actualizar
app.put('/api/v1/bootcamps/:id', (req,res)=>{
    res.status(200).json(
        {
            "message" : `aqui se va a actualizar:${req.params.id}`
        } 
        )
})
//delete
app.delete('/api/v1/bootcamps/:id', (req,res)=>{
    res.status(200).json(
        {
            "message" : `aqui se va a eliminar el bootcamps por id :${req.params.id}`
        } 
        )
})


app.get('/api/v1/user',(req,res)=>{
        res.status(200).json(
            {
                "message" : "aqui se van a mostrar todos los user"
            }
        )
    } )
    //obtener recurso por id
    app.get('/api/v1/user/:id',(req, res)=>{
        res.status(200).json(
            {
                "message" : `aqui se van a mostrar todos los user cuyo is es:${req.params.id}`
            }
        )
    })
    //POST : crear un nuevo recurso
    app.post('/api/v1/user',(req,res)=>{
        res.status(201).json(
            {
                "menssage": "aqui va a crear el user "
            }
        )
    })
    
    //Put - PATCH:actualizar
    app.put('/api/v1/user/:id', (req,res)=>{
        res.status(200).json(
            {
                "message" : `aqui se va a actualizar:${req.params.id}`
            } 
            )
    })
    //delete
    app.delete('/api/v1/user/:id', (req,res)=>{
        res.status(200).json(
            {
                "message" : `aqui se va a eliminar el user por id :${req.params.id}`
            } 
            )
    })


//3.metodo listen:ejecutar servidor
app.listen(process .env.port, ()=>{
    console.log(`Servidor Iniciado en puerto: ${process.env.port}`.bgBlack.blue)

})

