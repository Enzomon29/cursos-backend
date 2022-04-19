const getConnection = require('../../../database')
const { EntityNames } = require('../../../entities')

module.exports = async (payload) => {
   try {
      console.log('==> Servicio: Realizar compra')
      console.log(payload)
      const connection = await getConnection()
      const InscripcionRepository = connection.getRepository(
         EntityNames.InscripcionEntity
      )

      const UsuarioRepository = connection.getRepository(
         EntityNames.UsuarioEntity
      )

      const CursoRepository = connection.getRepository(
         EntityNames.CursoEntity
      )

      const curso = await CursoRepository.findOne({ id: payload.cursoId })

      if(!curso) {
         return {
            error: {
               code: 404,
               message: 'El curso no existe'
            }
         }
      }

      const usuario = payload.usuario
      const saldoActual = usuario.saldo - payload.monto

      if(saldoActual < 0) {
         return {
            error: {
               code: 400,
               message: 'No tiene saldo suficiente para realizar esta compra.'
            }
         }
      }

      const compra = await InscripcionRepository.save({
         cursoId: payload.cursoId,
         monto: payload.monto,
         usuarioId: usuario.id
      })

      // Actualizando saldo de usuario

      await UsuarioRepository.save({
         ...usuario,
         saldo: saldoActual
      })

      return compra
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
