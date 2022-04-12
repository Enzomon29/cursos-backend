const { CognitoIdentityServiceProvider } = require('aws-sdk')

class Cognito {
   constructor() {
      this.cognito = new CognitoIdentityServiceProvider({
         apiVersion: '2016-04-18'
      })
   }
}

module.exports = new Cognito()
