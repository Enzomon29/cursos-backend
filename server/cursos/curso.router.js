const { Router } = require('express')
const router = Router()

const controller = require('./curso.controller')
const schemas = require('./schemas')
const {
   validateQuery,
   validateBody
} = require('../../middlewares')

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

module.exports = router
