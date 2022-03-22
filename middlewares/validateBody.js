const { response } = require('../helpers')

module.exports = schema => (req,res,next) => {
   const { error, value } = schema.validate(req.body,{
      stripUnknown: true,
      allowUnknown: false,
      abortEarly: false
   })
   if(error) {
      return response(res,400,error.details[0].message)
   }
   req.body = value
   return next()
}
