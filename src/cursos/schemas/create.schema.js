const Joi = require('joi')

module.exports = Joi.object({
   nombre: Joi.string().trim().required().messages({
      'any.required': 'El campo nombre es requerido'
   }),
   precio: Joi.number().min(0).required().messages({
      'number.min': 'El precio del curso no puede ser menor a cero.',
      'number.base': 'El campo precio tiene que ser un número.',
   })
})
