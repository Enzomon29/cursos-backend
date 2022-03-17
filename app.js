const serverless = require('serverless-http')
const app = require('express')()
const cors = require('cors')
const bodyParser = require('body-parser')

const { handleError } = require('./middlewares')

app.use(cors())
app.use(bodyParser.json())

app.use('/cursos',require('./server/cursos/curso.router'))

app.use(handleError.routeError)
app.use(handleError.genericError)

module.exports.handler = serverless(app)