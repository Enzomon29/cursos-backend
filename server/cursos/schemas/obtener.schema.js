const Joi = require('joi')

module.exports = Joi.object({
   pagina: Joi.number().min(1).required().messages({
      'any.required': 'El campo pagina es requerido.'
   }),
   porPagina: Joi.number().min(1).required().messages({
      'any.required': 'El campo porPagina es requerido.'
   })
})