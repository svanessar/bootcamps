const express = require('express')
const {crearReview, 
       traerReview, 
       traerReviewPorId, 
       actualizarReview, 
       deleteReview
} =require('../Controller/ReviewController')
const router = express.Router()

//rutas de usuario 
router.route('/')
            .get(traerReview)
            .post(crearReview)

router.route('/:id')
            .get(traerReviewPorId)
            .put(actualizarReview)
            .delete(deleteReview)


module.exports=router