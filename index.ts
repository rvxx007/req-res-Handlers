
// if we required any value that time we can use this funtion to thow the Exception
// this Function take value and throw Exception 
function isRequired(any:any) {
    throw new Error(`${any} is Required`)
}


// This function take some parameter like response Object , statusCode (like 200 for success, 404 not found, etc. )
// success indicate response is successful or not thats why it take boolean value.
// msg take String type of data for Successful message or error message.
// body is a object which is use to send json object data as response.
function resFunc(res,statusCode:number,success:boolean,msg:string,body:object){
    
    if (typeof statusCode !== 'number') {
        throw new TypeError('statusCode must be a number');
    }
    if (typeof success !== 'boolean') {
        throw new TypeError('success must be a boolean');
    }
    if (typeof msg !== 'string') {
        throw new TypeError('msg must be a string');
    }
    if (typeof body !== 'object' || body === null) {
        throw new TypeError('body must be an object');
    }
    
    res.status(statusCode).send({
        success: success,
        msg:msg,
        body:body
    })
}


// This function take some parameter like response Object , statusCode (like 200 for success, 404 not found, etc. )
// success by default is false beacause catchFunc use to send Server Error type of response.
// msg take String type of data for Successful message or error message.
// error is a object which is use to send error(which we recievied from the catch((error)=>{console.error(error)}) block) object data as response.
function catchFunc(res,statusCode:number,msg:string,error:object){
    
    if (typeof statusCode !== 'number') {
        throw new TypeError('statusCode must be a number');
    }
    if (typeof msg !== 'string') {
        throw new TypeError('msg must be a string');
    }
    if (typeof error !== 'object' || error === null) {
        throw new TypeError('body must be an object');
    }

    res.status(statusCode).send({
        success: false,
        msg:msg,
        body:error
    })
}

export {resFunc,catchFunc}
