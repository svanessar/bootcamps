const express = require('express')
const {crearCourse, 
       traerCourse, 
       traerCoursePorId, 
       actualizarCourse, 
       deleteCourse
} =require('../Controller/CourseController')
const router = express.Router()

//rutas de usuario 
router.route('/')
            .get(traerCourse)
            .post(crearCourse)

router.route('/:id')
            .get(traerCoursePorId)
            .put(actualizarCourse)
            .delete(deleteCourse)


module.exports=router