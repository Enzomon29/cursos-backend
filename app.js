const serverless = require('serverless-http')
const app = require('express')()
const cors = require('cors')
const bodyParser = require('body-parser')

const { handleError } = require('./src/commons/middlewares')

app.use(cors())
app.use(bodyParser.json())

app.use('/cursos',require('./src/cursos/curso.router'))
app.use('/usuarios',require('./src/users/user.router'))

app.use(handleError.routeError)
app.use(handleError.genericError)

module.exports.handler = serverless(app)
