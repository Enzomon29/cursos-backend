const { response } = require('../commons/utils')
const Services = require('./services')

exports.crearUsuario = async (req,res) => {
   const payload = req.body
   const ans = await Services.crearUsuario({...payload})
   if(ans.error) {
      return response(res,ans.error.code,ans.error.message)
   }
   return response(res,200,ans)
}

/*
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
*/
