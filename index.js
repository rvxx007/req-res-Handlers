export function resFunc(res,statusCode,success,msg,body){
    res.status(statusCode).send({
        success: success,
        msg:msg,
        body:body
    })
}



export function catchFunc(res,statusCode,msg,body){
    res.status(statusCode).send({
        success: success,
        msg:msg,
        body:body
    })
}