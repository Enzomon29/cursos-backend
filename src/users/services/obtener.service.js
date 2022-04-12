const getConnection = require('../../../database')
const { EntityNames } = require('../../../entities')

module.exports = async (pagina,porPagina) => {
   try {
      const connection = await getConnection()
      const CursoRepository = connection.getRepository(
         EntityNames.CursoEntity
      )

      const cursos = await CursoRepository.find({})

      return {
         datos: cursos.slice(porPagina * (pagina - 1), porPagina * pagina),
         paginaActual: Number(pagina),
         paginas: Math.ceil(cursos.length / porPagina),
         total: cursos.length
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
