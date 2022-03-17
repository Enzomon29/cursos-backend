const Joi = require('joi')

module.exports = Joi.object({
   nombre: Joi.string().required().messages({
      'any.required': 'El campo nombre es requerido'
   })
})
