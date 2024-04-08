const errorHandler = (err, req, res, next)=>{
    console.log(err,"error handler")
        const statusCode = (err.response && err.response.status) ? err.response.status : res.statusCode ? res.statusCode : 500
        
        return res.status(statusCode).json({success: false, message:err.response && err.response.data && err.response.data.message || err.message || err.toString(), stack: process.env.NODE_ENV === 'production' ? null : err.stack})
    }
    
    
    module.exports ={errorHandler}