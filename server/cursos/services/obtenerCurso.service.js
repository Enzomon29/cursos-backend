const getConnection = require('../../../database')
const { EntityNames } = require('../../../entities')

module.exports = async (id) => {
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
      return curso
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
