const getConnection = require('../../../database')
const { EntityNames } = require('../../../entities')

module.exports = async (nombre) => {
   try {
      const connection = await getConnection()
      const CursoRepository = connection.getRepository(
         EntityNames.CursoEntity
      )
      const curso = await CursoRepository.save({nombre})
      return {
         payload: {
            ...curso
         }
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
