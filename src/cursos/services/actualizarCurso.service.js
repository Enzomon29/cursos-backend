const getConnection = require('../../../database')
const { EntityNames } = require('../../../entities')

module.exports = async (id,payload) => {
   try {
      const connection = await getConnection()
      const CursoRepository = connection.getRepository(
         EntityNames.CursoEntity
      )
      const curso = await CursoRepository.findOne({ id })
      if(!curso) {
         return {
            error: {
               code: 404,
               message: 'El curso con id ' + id + ' no existe.'
            }
         }
      }
      const datos = { id, ...payload }
      return await CursoRepository.save(datos)
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
