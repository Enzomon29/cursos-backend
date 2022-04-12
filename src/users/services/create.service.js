const getConnection = require('../../../database')
const { EntityNames } = require('../../../entities')
const { Cognito } = require('../../commons/resources')

module.exports = async (payload) => {
   try {
      console.log('==> Servicio: Crear usuario')
      console.log(payload)
      const connection = await getConnection()
      const UsuarioRepository = connection.getRepository(
         EntityNames.UsuarioEntity
      )
      const usuario = await UsuarioRepository.save(payload)
      console.log(usuario)
      await Cognito.registrarUsuario({ ...usuario })
      return {
         ...usuario
      }
   } catch(error) {
      console.error(error.message,error.stack)
      return {
         error: {
            code: 500,
            message: error.message
         }
      }
   }
}
