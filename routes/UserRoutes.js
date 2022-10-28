const express = require('express')
const {crearUser, 
       traerUser, 
       traerUserPorId, 
       actualizarUser, 
       deleteUser
} =require('../Controller/UserController')
const router = express.Router()

//rutas de usuario 
router.route('/')
            .get(traerUser)
            .post(crearUser)

router.route('/:id')
            .get(traerUserPorId)
            .put(actualizarUser)
            .delete(deleteUser)


module.exports=router



