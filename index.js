function resFunc(res,statusCode,success,msg,body){
    res.status(statusCode).send({
        success: success,
        msg:msg,
        body:body
    })
}



function catchFunc(res,statusCode,msg,body){
    res.status(statusCode).send({
        success: success,
        msg:msg,
         body:body
    })
}

export {resFunc,catchFunc}