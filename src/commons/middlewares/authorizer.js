const getConnection = require('../../../database')
const { EntityNames } = require('../../../entities')
const { response } = require('../utils')

module.exports =  (roles = []) => async (req,res,next) => {
   try {
      const connection = await getConnection()
      const UsuarioRepository = connection.getRepository(
         EntityNames.UsuarioEntity
      )

      const isOffline = process.env.IS_OFFLINE === 'true' ? true : false

      if(isOffline) {
         console.log('=> Proceso offline')
         req.locals = await UsuarioRepository.findOne({ sub: req.headers.sub })
      } else {
         const authProvider = req.requestContext.identity.cognitoAuthenticationProvider
         const parts = authProvider.split(':')
         const sub = parts.pop()
         req.locals = await UsuarioRepository.find({ sub })
      }

      if(!req.locals) {
         return response(res,404,'ERROR: El usuario no existe')
      }

      if(!roles.includes(req.locals.role)) {
         return response(res,404,'DESAUTORIZADO: El usuario no cuenta con permisos suficientes')
      }

      return next()
   } catch(error) {
      console.error(error.message,error.stack)
      return response(res,400,error.message)
   }
}
