module.exports = (res,code,message) => {
   if(code == 200 || code == 201) {
      return res.status(code).json({
         payload: message
      })
   } else {
      return res.status(code).json({
         error: {
            code,
            message
         }
      })
   }
}
