import { Request, Response, NextFunction } from "express";

/**
 * req-res-handlers - is a versatile npm package designed to simplify the handling of HTTP requests and responses in Express applications. It provides a suite of utility functions that streamline common tasks, enhance error handling, and configure essential middleware, enabling developers to focus on building robust server applications.
 * This repository provides a collection of utility functions to manage HTTP responses in an Express.js application. These functions cover various response categories such as informational, success, redirection, client errors, server errors, and more. Each function aims to standardize response formatting, improve code maintainability, and enhance readability for better handling of different types of HTTP status codes.
 */

// -------------------------------------------------------------------- \\
//                      New Updated Method Block
// -------------------------------------------------------------------- \\


/**
 * Sends an informational HTTP response (1xx) with an optional data payload.
 *
 * @param res - Express response object.
 * @param statusCode - HTTP status code (100, 101, 102).
 *  - 100: "Continue"
 *  - 101: "Switching Protocols"
 *  - 102: "Processing"
 * @param msg - Additional message to provide context to the status code.
 * @param data - Optional data to include in the response, can be an object or an array.
 *
 * @returns void
 */
function sendInformationalResponse(res:Response , statusCode:100|101|102, msg:string, data?:object|[] ):void{

    if(!data){
        res.status(statusCode).json({
            success:true,
            msg:(statusCode===100?"Continue : ":(statusCode===101?"Switching Protocols : ":(statusCode===102&&"Proccessing : ")))+msg,
        })
    }else{
        res.status(statusCode).json({
            success:true,
            msg:(statusCode===100?"Continue : ":(statusCode===101?"Switching Protocols : ":(statusCode===102&&"Proccessing : ")))+msg,
            data
        })
    }
}

// -------------------------------------------------------------------- \\


/**
 * Sends an HTTP 1xx informational response with optional data.
 *
 * This function is an alias for `sendInformationalResponse` with identical functionality.
 *
 * @param res - Express response object.
 * @param statusCode - HTTP status code (100, 101, 102).
 *  - 100: "Continue"
 *  - 101: "Switching Protocols"
 *  - 102: "Processing"
 * @param msg - Additional message to provide context to the status code.
 * @param data - Optional data to include in the response, can be an object or an array.
 *
 * @returns void
 */
function send1xxInformationalResponse(res:Response , statusCode:100|101|102, msg:string, data?:object|[] ):void{

    if(!data){
        res.status(statusCode).json({
            success:true,
            statusCode,
            msg:(statusCode===100?"Continue : ":(statusCode===101?"Switching Protocols : ":(statusCode===102&&"Proccessing : ")))+msg,
        })
    }else{
        res.status(statusCode).json({
            success:true,
            statusCode,
            msg:(statusCode===100?"Continue : ":(statusCode===101?"Switching Protocols : ":(statusCode===102&&"Proccessing : ")))+msg,
            data
        })
    }
}

// -------------------------------------------------------------------- \\

/**
 * Sends a standardized success response with a 2xx status code.
 *
 * @param res - Express response object.
 * @param statusCode - HTTP status code (200, 201, 202, 203, 204, 205, 206).
 * @param msg - Message to include in the response.
 * @param data - Optional data to include in the response (object or array).
 *
 * Status Codes and Corresponding Messages:
 * - 200: "OK"
 * - 201: "Created"
 * - 202: "Accepted"
 * - 203: "Non-Authoritative Information"
 * - 204: "No Content"
 * - 205: "Reset Content"
 * - 206: "Partial Content"
 */

function sendSuccessResponse(res:Response , statusCode:200|201|202|203|204|205|206, msg:string, data?:object|[] ):void{

    if(!data){
        res.status(statusCode).json({
            success:true,
            msg:(statusCode===200?"OK : ":(statusCode===201?"Created : ":(statusCode===202?"Accepted : ":(statusCode===203?"Non-Authoritative Information : ":(statusCode===204?"No Content : ":(statusCode===205?"Reset Content : ":(statusCode===206&&"Partial Content : ")))))))+msg,
        })
    }else{
        res.status(statusCode).json({
            success:true,
            msg:(statusCode===200?"OK : ":(statusCode===201?"Created : ":(statusCode===202?"Accepted : ":(statusCode===203?"Non-Authoritative Information : ":(statusCode===204?"No Content : ":(statusCode===205?"Reset Content : ":(statusCode===206&&"Partial Content : ")))))))+msg,
            data
        })
    }
}

/**
 * Alias for sendSuccessResponse, providing the same functionality.
 * Sends a standardized success response with a 2xx status code.
 *
 * @param res - Express response object.
 * @param statusCode - HTTP status code (200, 201, 202, 203, 204, 205, 206).
 * @param msg - Message to include in the response.
 * @param data - Optional data to include in the response (object or array).
 */

function send2xxSuccessResponse(res:Response , statusCode:200|201|202|203|204|205|206, msg:string, data?:object|[] ):void{

    if(!data){
        res.status(statusCode).json({
            success:true,
            statusCode,
            msg:(statusCode===200?"OK : ":(statusCode===201?"Created : ":(statusCode===202?"Accepted : ":(statusCode===203?"Non-Authoritative Information : ":(statusCode===204?"No Content : ":(statusCode===205?"Reset Content : ":(statusCode===206&&"Partial Content : ")))))))+msg,
        })
    }else{
        res.status(statusCode).json({
            success:true,
            statusCode,
            msg:(statusCode===200?"OK : ":(statusCode===201?"Created : ":(statusCode===202?"Accepted : ":(statusCode===203?"Non-Authoritative Information : ":(statusCode===204?"No Content : ":(statusCode===205?"Reset Content : ":(statusCode===206&&"Partial Content : ")))))))+msg,
            data
        })
    }
}

/**
 * Sends a 3xx redirection response to the client.
 *
 * @param res - Express Response object used to send the HTTP response.
 * @param statusCode - The HTTP status code for redirection (300, 301, 302, 303, 304, 307, 308).
 * @param msg - A custom message to append to the status description.
 * @param data - Optional data to include in the response body (object or array).
 *
 * @returns void
 *
 * @example
 * sendRedirectionResponse(res, 301, "Resource moved to a new location.", { url: "https://example.com" });
 */

function sendRedirectionResponse(res:Response , statusCode:300|301|302|303|304|307|308, msg:string, data?:object|[] ):void{

    if(!data){
        res.status(statusCode).json({
            success:true,
            msg:(statusCode===300?"Multiple Choices : ":(statusCode===301?"Moved Permanently : ":(statusCode===302?"Found : ":(statusCode===303?"See Other : ":(statusCode===304?"Not Modified : ":(statusCode===307?"Temporary Redirect : ":(statusCode===308&&"Parmanent Redirect : ")))))))+msg,
        })
    }else{
        res.status(statusCode).json({
            success:true,
            msg:(statusCode===300?"Multiple Choices : ":(statusCode===301?"Moved Permanently : ":(statusCode===302?"Found : ":(statusCode===303?"See Other : ":(statusCode===304?"Not Modified : ":(statusCode===307?"Temporary Redirect : ":(statusCode===308&&"Parmanent Redirect : ")))))))+msg,
            data
        })
    }
}

/**
 * Sends a 3xx redirection response to the client.
 * This function is an alias for sendRedirectionResponse, maintaining compatibility.
 *
 * @param res - Express Response object used to send the HTTP response.
 * @param statusCode - The HTTP status code for redirection (300, 301, 302, 303, 304, 307, 308).
 * @param msg - A custom message to append to the status description.
 * @param data - Optional data to include in the response body (object or array).
 *
 * @returns void
 *
 * @example
 * send3xxRedirectionResponse(res, 302, "Resource found at a different URI.", { url: "https://example.com" });
 */

function send3xxRedirectionResponse(res:Response , statusCode:300|301|302|303|304|307|308, msg:string, data?:object|[] ):void{

    if(!data){
        res.status(statusCode).json({
            success:true,
            statusCode,
            msg:(statusCode===300?"Multiple Choices : ":(statusCode===301?"Moved Permanently : ":(statusCode===302?"Found : ":(statusCode===303?"See Other : ":(statusCode===304?"Not Modified : ":(statusCode===307?"Temporary Redirect : ":(statusCode===308&&"Parmanent Redirect : ")))))))+msg,
        })
    }else{
        res.status(statusCode).json({
            success:true,
            statusCode,
            msg:(statusCode===300?"Multiple Choices : ":(statusCode===301?"Moved Permanently : ":(statusCode===302?"Found : ":(statusCode===303?"See Other : ":(statusCode===304?"Not Modified : ":(statusCode===307?"Temporary Redirect : ":(statusCode===308&&"Parmanent Redirect : ")))))))+msg,
            data
        })
    }
}

/**
 * Sends a client error response with a specified HTTP status code and message.
 *
 * @param res - The Express `Response` object.
 * @param statusCode - The HTTP status code (4xx) to send.
 *  - 400: Bad Request
 *  - 401: Unauthorized
 *  - 403: Forbidden
 *  - 404: Not Found
 *  - 405: Method Not Allowed
 *  - 406: Not Acceptable
 *  - 408: Request Timeout
 *  - 409: Conflict
 *  - 410: Gone
 *  - 411: Length Required
 *  - 412: Precondition Failed
 *  - 413: Payload Too Large
 *  - 414: URI Too Long
 *  - 415: Unsupported Media Type
 *  - 429: Too Many Requests
 * @param msg - The message to include in the response, appended to the status description.
 * @param data - Optional additional data to include in the response (can be an object or array).
 */
function sendClientErrorResponse(res:Response , statusCode:400|401|403|404|405|406|408|409|410|411|412|413|414|415|429, msg:string, data?:object|[] ):void{

    if(!data){
        res.status(statusCode).json({
            success:true,
            msg:(statusCode===400?"Bad Request : ":(statusCode===401?"Unauthorized : ":(statusCode===403?"Forbidden : ":(statusCode===404?"Not Found : ":(statusCode===405?"Method Not Allowed : ":(statusCode===406?"Not Acceptable : ":(statusCode===408?"Request Timeout : ":(statusCode===409?"Conflict : ":(statusCode===410?"Gone : ":(statusCode===411?"Length Required : ":(statusCode===412?"Procondition Failed : ":(statusCode===413?"Payload To Large : ":(statusCode===414?"URI To Long : ":(statusCode===415?"Unsupported Media Type : ":(statusCode===429&&"To Many Requests : ")))))))))))))))+msg,
        })
    }else{
        res.status(statusCode).json({
            success:true,
            msg:(statusCode===400?"Bad Request : ":(statusCode===401?"Unauthorized : ":(statusCode===403?"Forbidden : ":(statusCode===404?"Not Found : ":(statusCode===405?"Method Not Allowed : ":(statusCode===406?"Not Acceptable : ":(statusCode===408?"Request Timeout : ":(statusCode===409?"Conflict : ":(statusCode===410?"Gone : ":(statusCode===411?"Length Required : ":(statusCode===412?"Procondition Failed : ":(statusCode===413?"Payload To Large : ":(statusCode===414?"URI To Long : ":(statusCode===415?"Unsupported Media Type : ":(statusCode===429&&"To Many Requests : ")))))))))))))))+msg,
            data
        })
    }
}

/**
 * Sends a 4xx client error response with a specified HTTP status code and message.
 *
 * @param res - The Express `Response` object.
 * @param statusCode - The HTTP status code (4xx) to send.
 *  - 400: Bad Request
 *  - 401: Unauthorized
 *  - 403: Forbidden
 *  - 404: Not Found
 *  - 405: Method Not Allowed
 *  - 406: Not Acceptable
 *  - 408: Request Timeout
 *  - 409: Conflict
 *  - 410: Gone
 *  - 411: Length Required
 *  - 412: Precondition Failed
 *  - 413: Payload Too Large
 *  - 414: URI Too Long
 *  - 415: Unsupported Media Type
 *  - 429: Too Many Requests
 * @param msg - The message to include in the response, appended to the status description.
 * @param data - Optional additional data to include in the response (can be an object or array).
 */
function send4xxClientErrorResponse(res:Response , statusCode:400|401|403|404|405|406|408|409|410|411|412|413|414|415|429, msg:string, data?:object|[] ):void{

    if(!data){
        res.status(statusCode).json({
            success:true,
            statusCode,
            msg:(statusCode===400?"Bad Request : ":(statusCode===401?"Unauthorized : ":(statusCode===403?"Forbidden : ":(statusCode===404?"Not Found : ":(statusCode===405?"Method Not Allowed : ":(statusCode===406?"Not Acceptable : ":(statusCode===408?"Request Timeout : ":(statusCode===409?"Conflict : ":(statusCode===410?"Gone : ":(statusCode===411?"Length Required : ":(statusCode===412?"Procondition Failed : ":(statusCode===413?"Payload To Large : ":(statusCode===414?"URI To Long : ":(statusCode===415?"Unsupported Media Type : ":(statusCode===429&&"To Many Requests : ")))))))))))))))+msg,
        })
    }else{
        res.status(statusCode).json({
            success:true,
            statusCode,
            msg:(statusCode===400?"Bad Request : ":(statusCode===401?"Unauthorized : ":(statusCode===403?"Forbidden : ":(statusCode===404?"Not Found : ":(statusCode===405?"Method Not Allowed : ":(statusCode===406?"Not Acceptable : ":(statusCode===408?"Request Timeout : ":(statusCode===409?"Conflict : ":(statusCode===410?"Gone : ":(statusCode===411?"Length Required : ":(statusCode===412?"Procondition Failed : ":(statusCode===413?"Payload To Large : ":(statusCode===414?"URI To Long : ":(statusCode===415?"Unsupported Media Type : ":(statusCode===429&&"To Many Requests : ")))))))))))))))+msg,
            data
        })
    }
}

/**
 * Sends a server error response with the appropriate HTTP status code and message.
 * 
 * @param res - The Express response object.
 * @param statusCode - The HTTP status code (500, 501, 502, 503, 504, 505).
 *   - 500: Internal Server Error
 *   - 501: Not Implemented
 *   - 502: Bad Gateway
 *   - 503: Service Unavailable
 *   - 504: Gateway Timeout
 *   - 505: HTTP Version Not Supported
 * @param msg - A custom message to include in the response.
 * @param data - Optional additional data to include in the response (object or array).
 * 
 * @returns void
 */
function sendServerErrorResponse(res:Response , statusCode:500|501|502|503|504|505, msg:string, data?:object|[] ):void{

    if(!data){
        res.status(statusCode).json({
            success:true,
            msg:(statusCode===500?"Internal Server Error : ":(statusCode===501?"Not Implemented : ":(statusCode===502?"Bad Gateway : ":(statusCode===503?"Service unavailable : ":(statusCode===504?"Gateway Timeout : ":(statusCode===505&&"HTTP Version Not Supported : "))))))+msg,
        })
    }else{
        res.status(statusCode).json({
            success:true,
            msg:(statusCode===500?"Internal Server Error : ":(statusCode===501?"Not Implemented : ":(statusCode===502?"Bad Gateway : ":(statusCode===503?"Service unavailable : ":(statusCode===504?"Gateway Timeout : ":(statusCode===505&&"HTTP Version Not Supported : "))))))+msg,
            data
        })
    }
}

/**
 * Sends a 5xx server error response with the appropriate HTTP status code and message.
 * 
 * @param res - The Express response object.
 * @param statusCode - The HTTP status code (500, 501, 502, 503, 504, 505).
 *   - 500: Internal Server Error
 *   - 501: Not Implemented
 *   - 502: Bad Gateway
 *   - 503: Service Unavailable
 *   - 504: Gateway Timeout
 *   - 505: HTTP Version Not Supported
 * @param msg - A custom message to include in the response.
 * @param data - Optional additional data to include in the response (object or array).
 * 
 * @returns void
 */
function send5xxServerErrorResponse(res:Response , statusCode:500|501|502|503|504|505, msg:string, data?:object|[] ):void{

    if(!data){
        res.status(statusCode).json({
            success:true,
            statusCode,
            msg:(statusCode===500?"Internal Server Error : ":(statusCode===501?"Not Implemented : ":(statusCode===502?"Bad Gateway : ":(statusCode===503?"Service unavailable : ":(statusCode===504?"Gateway Timeout : ":(statusCode===505&&"HTTP Version Not Supported : "))))))+msg,
        })
    }else{
        res.status(statusCode).json({
            success:true,
            statusCode,
            msg:(statusCode===500?"Internal Server Error : ":(statusCode===501?"Not Implemented : ":(statusCode===502?"Bad Gateway : ":(statusCode===503?"Service unavailable : ":(statusCode===504?"Gateway Timeout : ":(statusCode===505&&"HTTP Version Not Supported : "))))))+msg,
            data
        })
    }
}

/**
 * Sends an error message response to the client with the specified status code and message.
 *
 * @param res - The Express response object used to send the response.
 * @param statusCode - The HTTP status code (500 for "Internal Server Error", 503 for "Service Unavailable").
 * @param msg - The error message to include in the response.
 *
 * @remarks
 * - When statusCode is 500, the message prefix will be "Internal Server Error :".
 * - When statusCode is 503, the message prefix will be "Service unavailable :".
 *
 * @example
 * sendErrorMsgResponse(res, 500, "Database connection failed");
 * // Sends a response: { success: false, msg: "Internal Server Error : Database connection failed" }
 *
 * sendErrorMsgResponse(res, 503, "Server under maintenance");
 * // Sends a response: { success: false, msg: "Service unavailable : Server under maintenance" }
 */
function sendErrorMsgResponse(res:Response,statusCode:500|503, msg:string):void{
    res.status(statusCode).json({
        success:false,
        msg:(statusCode===500?"Internal Server Error :":(statusCode===503&&"Service unavailable : "))
    });
}


/**
 * Sends a standardized error response with optional data in case of a server error.
 *
 * @param res - Express Response object used to send the HTTP response.
 * @param msg - A descriptive error message to be included in the response.
 * @param data - Optional. Additional data related to the error. Can be an object, array, or an Error instance.
 *
 * @statusCode 500 - Internal Server Error
 * @message The response will include the provided error message and optional data.
 *
 * @example
 * // Sending a simple error message
 * sendCatchResponse(res, 'An unexpected error occurred.');
 *
 * @example
 * // Sending an error message with additional data
 * sendCatchResponse(res, 'Failed to process request', { details: 'Invalid ID' });
 *
 * @example
 * // Sending an error message with an Error instance
 * sendCatchResponse(res, 'Error while fetching data', new Error('Database connection failed'));
 */
function sendCatchResponse(res:Response,msg:string,data?:object|[]|Error):void{
   if(!data){
    res.status(500).json({
        success:false,
        msg
    });
   }else{
    res.status(500).json({
        success:false,
        msg,
        data
    });
   }
}
// -------------------------------------------------------------------- \\
//                            End Block
// -------------------------------------------------------------------- \\



// -------------------------------------------------------------------- \\
//                          Old Methods Block
// -------------------------------------------------------------------- \\



/**
 * Sets up CORS middleware for an Express application.

 * This function configures CORS middleware to allow requests from specified origins and with specific HTTP methods.

 * @param app The Express application instance.
 * @param cors The CORS middleware instance.
 * @param originUrls An array of allowed origin URLs.
 * @param methods An array of allowed HTTP methods.
 */
function setCors(app: any, cors: any, originUrls: string[], methods: string[] = ['GET', 'POST', 'PUT', 'DELETE']) {
    app.use(cors({
        origin: [...originUrls],
        methods: methods,
        allowedHeaders: ['Content-Type', 'Authorization']
    }));
}


/**
 * Logs incoming HTTP requests and their corresponding responses.

 * This middleware function logs the HTTP method, URL, and status code of each incoming request to the console. It is typically used to monitor application traffic and identify potential issues.

 * @param req The incoming HTTP request object.
 * @param res The outgoing HTTP response object.
 * @param next The next middleware function in the chain.
 */
const logRequest = (req: Request, res: Response, next: NextFunction)=> {
    const { method, originalUrl } = req;
    const timestamp = new Date().toISOString();
  
    console.log(`[${timestamp}] - ${method} - ${originalUrl} - ${res.status}`);
    next();
}


/**
 * Paginates an array of items.
 *
 * This function takes an array of items, a page number, and a limit, and returns a new array containing the specified page of items.
 * 
 * @param items The array of items to paginate.
 * @param page The page number (1-indexed).
 * @param limit The number of items per page.
 *
 * @returns A new array containing the paginated items.
 *
 * @example
 * ```typescript
 * const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 *
 * const page1 = paginate(numbers, 1, 3); // [1, 2, 3]
 * const page2 = paginate(numbers, 2, 3); // [4, 5, 6]
 * const page3 = paginate(numbers, 3, 3); // [7, 8, 9]
 * ```
 */
function paginate<T>(items : T[], page:number, limit:number):T[] {
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedItems = items.slice(startIndex, endIndex);
    return paginatedItems;
}



/**
 * Authorizes a request based on the user's role.
 *
 * This middleware function checks if the user's role matches the specified role. If not, it returns a 403 Forbidden response.
 * Otherwise, it calls the next middleware function.
 *
 * @param role The required role for authorization.
 *
 * @returns A middleware function that checks the user's role.
 *
 * @example
 * ```typescript
 * const router = express.Router();
 *
 * router.get('/admin', authorizeRole('admin'), (req, res) => {
 *     // Admin-only route
 *     res.send('Admin dashboard');
 * });
 * ```
 */
function authorizeRole(role: string): (req: Request, res: Response, next: NextFunction) => void {
    return (req: any, res: any, next: Function) => {
      if (req.user.role !== role) {
        return res.status(403).json({ message: 'Unauthorized' });
      }
      next();
    };
  }

export {
    send1xxInformationalResponse,
    sendInformationalResponse,
    send2xxSuccessResponse,
    sendSuccessResponse,
    send3xxRedirectionResponse,
    sendRedirectionResponse,
    send4xxClientErrorResponse,
    sendClientErrorResponse,
    send5xxServerErrorResponse,
    sendServerErrorResponse,
    sendErrorMsgResponse,
    sendCatchResponse,
    setCors,
    logRequest,
    authorizeRole,
    paginate,
    }
