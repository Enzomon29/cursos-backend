module.exports = {
   name: "Usuario",
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
      apellido: {
         type: "varchar",
         nullable: false
      },
      documento: {
         type: "varchar",
         nullable: true
      },
      fechaNacimiento: {
         type: "timestamp",
         nullable: false
      },
      email: {
         type: "varchar",
         nullable: false
      },
      role: {
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
      }
   }
}
