const getConnection = require('../../../database')
const { EntityNames } = require('../../../entities')

module.exports = async (usuario) => {
   try {
      const connection = await getConnection()
      const InscripcionRepository = connection.getRepository(
         EntityNames.InscripcionEntity
      )

      /*
      const query = await InscripcionRepository
         .createQueryBuilder('compras')
         .select([
            'CUR.nombre',
            'CUR.activo',
            'CUR.precio',
            'INS.creado as fechaInscripcion',
            'INS.monto',
            'INS.id'
         ])
         .innerJoin('compras.curso','curso')
         .where('compras.userId =: userId', { userId: usuario.id })
         .getMany()
         */
      const rawData = await InscripcionRepository.query(`
         SELECT
            CUR.nombre,
            CUR.activo,
            CUR.precio,
            INS.creado as fechaInscripcion,
            INS.monto,
            INS.id as inscripcionId
         FROM inscripcion INS
         INNER JOIN curso CUR ON CUR.id = INS.cursoId
         WHERE INS.usuarioId = ${usuario.id};
      `)

      return rawData
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
