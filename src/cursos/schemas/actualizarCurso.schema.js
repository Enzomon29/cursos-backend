const Joi = require('joi')

module.exports = Joi.object({
   nombre: Joi.string().trim().messages({
      'string.trim': 'El nombre no debe contener espacios en blanco al inicio y final.'
   }),
   precio: Joi.number().min(0).messages({
      'number.min': 'El precio del curso no puede ser menor a cero.',
      'number.base': 'El campo precio tiene que ser un número.',
   }),
   activo: Joi.boolean(),
   calificacion: Joi.number().min(0).max(5).messages({
      'number.min': 'La calificación del curso no puede ser menor a cero.',
      'number.max': 'La calificación del curso no puede ser mayor a cinco.',
      'number.base': 'El campo precio tiene que ser un número.',
   })
})
