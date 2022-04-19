const Joi = require('joi')

module.exports = Joi.object({
   nombre: Joi.string().trim().required().messages({
      'any.required': 'El campo nombre es requerido.'
   }),
   apellido: Joi.string().trim().required().messages({
      'any.required': 'El campo nombre es requerido.'
   }),
   fechaNacimiento: Joi.date().timestamp('javascript')
      .required()
      .less(Date.now())
      .messages({
         'date.less': 'La fecha de nacimiento no puede ser igual al día de hoy.',
         'any.required': 'El campo fechaNacimiento es requerido.'
      }),
   email: Joi.string().email().required().messages({
      'string.email': 'El campo email no cumple con el formato de correo requerido.',
      'any.required': 'El campo email es requerido.',
   }),
   tipoDocumento: Joi.string().valid('DNI','RUC').required().messages({
      'any.only': 'El tipo de documento debe ser DNI o RUC',
      'any.required': 'El campo tipoDocumento es requerido.',
   }),
   documento: Joi.string().regex(/^[0-9]*$/).required().when('tipoDocumento', {
      is: 'DNI',
      then: Joi.string().length(8).messages({
         'string.length': 'El campo documento debe contener seis caracteres.'
      }),
      otherwise: Joi.string().length(11).messages({
         'string.length': 'El campo documento debe contener once caracteres.'
      }),
   }).messages({
      'string.pattern.base': 'La cadena solo debe contener números.',
      'any.required': 'El campo documento es requerido.',
   }),
   role: Joi.string().valid('ADMIN','USER').required().messages({
      'any.only': 'El rol del usuario debe ser ADMIN o USER',
      'any.required': 'El campo role es requerido.',
   }),
})
