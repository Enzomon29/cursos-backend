const { CognitoIdentityServiceProvider } = require('aws-sdk')
const { USER_POOL } = require('../../../config')

class Cognito {
   constructor() {
      this.cognito = new CognitoIdentityServiceProvider({
         apiVersion: '2016-04-18'
      })
      this.userPoolId = USER_POOL
   }
   
   createUser({
      email,
      name,
      id,
      lastName,
   }) {
      const attributes = [{
         Name: 'name',
         Value: name
      }, {
         Name: 'email',
         Value: email
      }, {
         Name: 'custom:user_id',
         Value: id
      }, {
         Name: 'family_name',
         Value: lastName
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

   addToGroup(email,role) {
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

   registerUser(paramsToCreate = {
      email,
      name,
      id,
      lastName,
      role
   }) {
      const user = await this.createUser({ ...paramsToCreate })
      await this.addToGroup(email,role)
      return user
   }
}

module.exports = new Cognito()
