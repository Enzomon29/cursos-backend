const { response } = require('../commons/utils')
const Services = require('./services')

exports.inscribirse = async (req, res) => {
   const payload = {
      monto: req.body.monto,
      cursoId: Number(req.params.cursoId),
      usuario: req.locals
   }
   const ans = await Services.inscribirse({...payload})
   if (ans.error) {
      return response(res, ans.error.code, ans.error.message)
   }
   return response(res, 200, ans)
}

exports.obtenerCompras = async (req,res) => {
   const payload = req.locals
   const ans = await Services.obtenerCompras(payload)
   if (ans.error) {
      return response(res, ans.error.code, ans.error.message)
   }
   return response(res, 200, ans)
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
