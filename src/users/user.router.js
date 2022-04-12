const { Router } = require('express')
const router = Router()

const controller = require('./user.controller')
const schemas = require('./schemas')
const {
   validateQuery,
   validateBody,
   validateId
} = require('../commons/middlewares')

router.post(
   '/',
   validateBody(schemas.crearUsuario),
   controller.crearUsuario
)

/*
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
*/

module.exports = router
