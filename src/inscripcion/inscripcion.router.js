const { Router } = require('express')
const router = Router()

const controller = require('./inscripcion.controller')
const schemas = require('./schemas')
const {
   validateQuery,
   validateBody,
   validateId,
   authorizer
} = require('../commons/middlewares')

router.post(
   '/:cursoId',
   authorizer(['USER']),
   validateBody(schemas.inscribirse),
   controller.inscribirse
)

router.get(
   '/',
   authorizer(['USER']),
   controller.obtenerCompras
)

module.exports = router
