const { Router } = require('express')
const router = Router()

const controller = require('./curso.controller')
const schemas = require('./schemas')
const {
   validateQuery,
   validateBody,
   validateId
} = require('../commons/middlewares')

router.post(
   '/',
   validateBody(schemas.crearCurso),
   controller.crearCurso
)

router.get(
   '/',
   validateQuery(schemas.obtenerCursos),
   controller.obtenerCursos
)

router.put(
   '/:id',
   validateId,
   validateBody(schemas.actualizarCurso),
   controller.actualizarCurso
)

router.get(
   '/:id',
   validateId,
   controller.obtenerCurso
)

module.exports = router
