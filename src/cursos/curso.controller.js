const { response } = require('../commons/utils')
const Services = require('./services')

exports.crearCurso = async (req,res) => {
   const name = req.body.nombre
   const ans = await Services.crearCurso(name)
   if(ans.error) {
      return response(res,ans.error.code,ans.error.message)
   }
   return response(res,200,ans)
}

exports.obtenerCursos = async (req,res) => {
   const {
      pagina = 1,
      porPagina = 10
   } = req.query
   const ans = await Services.obtenerCursos(pagina,porPagina)
   if(ans.error) {
      return response(res,ans.error.code,ans.error.message)
   }
   return response(res,200,ans)
}

exports.actualizarCurso = async (req,res) => {
   const id = req.params.id
   const payload = req.body
   const ans = await Services.actualizarCurso(id,payload)
   if(ans.error) {
      return response(res,ans.error.code,ans.error.message)
   }
   return response(res,200,ans)
}

exports.obtenerCurso = async (req,res) => {
   const id = req.params.id
   const ans = await Services.obtenerCurso(id)
   if(ans.error) {
      return response(res,ans.error.code,ans.error.message)
   }
   return response(res,200,ans)
}
