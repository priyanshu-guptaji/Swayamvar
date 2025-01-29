exports.HandlingNotFound=(err,req,res,next)=>{
    res.status(err.statusCode).json({
        code:err.statusCode,
        error:'Not Found' ,
        message: 'The requested resources was not found on this server.'
    });
}
