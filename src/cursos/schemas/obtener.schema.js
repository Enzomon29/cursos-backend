const Joi = require('joi')

module.exports = Joi.object({
   pagina: Joi.number().min(1).required().messages({
      'number.base': 'El campo pagina debe ser un número.',
      'any.required': 'El campo pagina es requerido.'
   }),
   porPagina: Joi.number().min(1).required().messages({
      'number.base': 'El campor porPagina debe ser un número.',
      'any.required': 'El campo porPagina es requerido.'
   })
})
