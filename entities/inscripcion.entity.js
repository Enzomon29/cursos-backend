module.exports = {
   name: "Inscripcion",
   columns: {
      id: {
         primary: true,
         type: "int",
         generated: true,
      },
      creado: {
         type: "timestamp",
         default: () => "CURRENT_TIMESTAMP",
      },
      actualizado: {
         type: "timestamp",
         default: () => "CURRENT_TIMESTAMP",
      },
      monto: {
         type: "float",
         nullable: false
      },
      usuarioId: {
         type: "int",
         nullable: false
      },
      cursoId: {
         type: "int",
         nullable: false
      },
   },
   /*
   relations: {
      usuario: {
         type: 'many-to-one',
         target: 'Usuario'
      },
      curso: {
         type: 'many-to-one',
         target: 'Curso'
      }
   }
   */
}
