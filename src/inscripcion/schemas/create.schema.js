const Joi = require('joi')

module.exports = Joi.object({
   monto: Joi.number().min(0).required().messages({
      'number.min': 'El monto de la compra no puede ser menor a cero.',
      'number.base': 'El campo monto tiene que ser un número.',
      'any.required': 'El campo monto es requerido'
   })
})
