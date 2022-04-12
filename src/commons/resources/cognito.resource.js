const { CognitoIdentityServiceProvider } = require('aws-sdk')
const { USER_POOL } = require('../../../config')

class Cognito {
   constructor() {
      this.cognito = new CognitoIdentityServiceProvider({
         apiVersion: '2016-04-18'
      })
      this.userPoolId = USER_POOL
   }
   
   crearUsuario({
      email,
      nombre,
      id,
      apellido
   }) {
      const attributes = [{
         Name: 'name',
         Value: nombre
      }, {
         Name: 'email',
         Value: email
      }, {
         Name: 'custom:user_id',
         Value: String(id)
      }, {
         Name: 'family_name',
         Value: apellido
      }, {
         Name: 'email_verified',
         Value: 'true'
      }]

      const params = {
         UserPoolId: this.userPoolId,
         Username: email,
         UserAttributes: attributes
      }

      return new Promise((resolve, reject) => {
         this.cognito.adminCreateUser(params,(err,data) => {
            if(err) {
               return reject(err)
            }
            return resolve(data)
         })
      })
   }

   agregarToGrupo(email,role) {
      const params = {
         UserPoolId: this.userPoolId,
         Username: email,
         GroupName: role
      }

      return new Promise((resolve, reject) => {
         this.cognito.adminAddUserToGroup(params,(err,data) => {
            if(err) {
               return reject(err)
            }
            return resolve(data)
         })
      })

   }

   async registrarUsuario(paramsToCreate = {
      email,
      nombre,
      id,
      apellido,
      role
   }) {
      const user = await this.crearUsuario({ ...paramsToCreate })
      await this.agregarToGrupo(
         paramsToCreate.email,
         paramsToCreate.role
      )

      return user
   }
}

module.exports = new Cognito()
