const express = require('express')

const router = express.Router()
//establecer la rutas user

router.get('/',(req,res)=>{
        res.status(200).json(
            {
                "message" : "aqui se van a mostrar todos los user"
            }
        )
    } )

//obtener recurso por id
router.get('/:id',(req, res)=>{
    res.status(200).json(
        {
            "message" : `aqui se van a mostrar todos los user cuyo is es:${req.params.id}`
        }
    )
})
//POST : crear un nuevo recurso
router.post('/',(req,res)=>{
    res.status(201).json(
        {
            "menssage": "aqui va a crear el user "
        }
    )
})

//Put - PATCH:actualizar
router.put('/:id', (req,res)=>{
    res.status(200).json(
        {
            "message" : `aqui se va a actualizar:${req.params.id}`
        } 
        )
})
//delete
router.delete('/api/v1/user/:id', (req,res)=>{
    res.status(200).json(
        {
            "message" : `aqui se va a eliminar el user por id :${req.params.id}`
        } 
        )
})

//exportar el objecto router

module.exports=router