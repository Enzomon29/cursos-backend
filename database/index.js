const typeorm = require('typeorm')
const EntitySchema = typeorm.EntitySchema;

const {
   DATABASE_NAME,
   SECRET_ARN,
   DATABASE_ARN,
   DATABASE_REGION,
   DATABASE_USERNAME,
   DATABASE_PASSWORD,
   DATABASE_HOST
} = require('../config')

const {
   CursoEntity,
   UsuarioEntity
} = require('../entities')

const connectionOptions = {
   type: "mysql",
   synchronize: true,
   database: DATABASE_NAME,
   secretArn: SECRET_ARN,
   resourceArn: DATABASE_ARN,
   region: DATABASE_REGION,
   charset: "utf8",
   formatOptions: {
      castParameters: false,
   },
   entities: [
      new EntitySchema(CursoEntity),
      new EntitySchema(UsuarioEntity)
   ],
   username: DATABASE_USERNAME,
   password: DATABASE_PASSWORD,
   host: DATABASE_HOST
}

var cachedConnection

module.exports = async () => {
   if (cachedConnection) {
      return cachedConnection;
   }
   cachedConnection = await typeorm.createConnection(connectionOptions)
   console.log('> Nueva conexión creada')
   return cachedConnection;
};
