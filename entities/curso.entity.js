module.exports = {
   name: "Curso",
   columns: {
      id: {
         primary: true,
         type: "int",
         generated: true,
      },
      nombre: {
         type: "varchar",
         nullable: false
      },
      creado: {
         type: "timestamp",
         default: () => "CURRENT_TIMESTAMP",
      },
      actualizado: {
         type: "timestamp",
         default: () => "CURRENT_TIMESTAMP",
      },
      activo: {
         type: "boolean",
         default: false
      },
      calificacion: {
         type: "float",
         default: 0.0
      },
      precio: {
         type: "float",
         default: 0.0
      },
      ramo: {
         type: "varchar",
         nullable: true
      }
   }
}
