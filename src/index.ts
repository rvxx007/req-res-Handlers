import { Request, Response, NextFunction } from "express";

/**
 * Sends a formatted JSON response to the client.

 * This function constructs a JSON response with the specified status code, success flag, message, and data.
 * It ensures that the provided parameters are of the correct types and throws appropriate errors if invalid.

 * @param res The Express response object.
 * @param statusCode The HTTP status code to set for the response.
 * @param success A boolean indicating whether the request was successful.
 * @param msg A string message to include in the response.
 * @param data An object containing additional data to include in the response.

 * @throws {TypeError} If any of the parameters are of an invalid type.

 * @example
 * ```typescript
 * app.get('/users', (req, res) => {
 *     const users = getUsers(); // Assuming this fetches users
 *     sendResponse(res, 200, true, 'Users fetched successfully', users);
 * });
 * ```
 */
function sendResponse(res: Response, statusCode: number, success: boolean, msg: string, data: object) {
    if (typeof statusCode !== 'number') {
        throw new TypeError('statusCode must be a number');
    }
    if (typeof success !== 'boolean') {
        throw new TypeError('success must be a boolean');
    }
    if (typeof msg !== 'string') {
        throw new TypeError('msg must be a string');
    }
    if (typeof data !== 'object' || data === null) {
        throw new TypeError('data must be an object');
    }

    res.status(statusCode).json({
        success,
        msg,
        data
    });
}



/**
 * Error handler function to handle errors and send appropriate responses.

 * @param err The error object.
 * @param res The response object.
 * @param statusCode The HTTP status code to send in the response.
 * @param msg The error message to send in the response.

 * This function logs the error stack to the console, validates the `statusCode` and `msg` parameters, and sends a JSON response with a `success` flag set to `false`, the specified `msg`, and the error object as `data`.

 * @example
 * ```typescript
 * import { errorHandler } from './errorHandler';

 * app.use((err, req, res, next) => {
 *     errorHandler(err, res, 500, 'Internal Server Error');
 * });
 * ```
 */
function errorHandler(err: Error, res: Response, statusCode: number, msg: string) {
    console.error(err.stack);

    if (typeof statusCode !== 'number') {
        throw new TypeError('statusCode must be a number');
    }
    if (typeof msg !== 'string') {
        throw new TypeError('msg must be a string');
    }

    res.status(statusCode).json({
        success: false,
        msg: msg,
        data: err
    });
}

/**
 * Configures the Express app to parse incoming requests with JSON and URL-encoded payloads.
 * 
 * @param {express app} app - The Express application instance.
 * @param {express} express - The Express library, used to enable middleware for parsing.
 * 
 * app.use(express.json()) - Parses incoming requests with JSON payloads (application/json).
 * app.use(express.urlencoded({ extended: false })) - Parses incoming requests with URL-encoded payloads 
 * (application/x-www-form-urlencoded) where the extended option is set to false, meaning that the querystring library 
 * will be used for parsing instead of the qs library, limiting nested object support.
 */
function setExpressUrlendodedAndJson(app:any,express:any){
    // parse requests of content-type - application/json
    // Middleware to parse requests with JSON payloads
    app.use(express.json());

    // Middleware to parse requests with URL-encoded payloads
    // extended: false means only simple key-value pairs can be parsed (no nested objects)
    app.use(express.urlencoded({extended:false}));
}


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
function logRequest(req: Request, res: Response, next: NextFunction) {
    console.log(`${req.method} - ${req.url} - ${res.status}`);
    next();
}


/**
 * Logs an error to the console and passes it to the next error-handling middleware.

 * This function is typically used as an error-handling middleware in Express.js applications. It logs the error stack to the console for debugging purposes and then passes the error to the next middleware in the error-handling chain.

 * @param err The error object.
 * @param req The request object.
 * @param res The response object.
 * @param next The next middleware function.
 */
function logError(err: Error, req: Request, res: Response, next: NextFunction) {
    console.error(err.stack);
    next(err);
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
    sendResponse,
    errorHandler,
    setExpressUrlendodedAndJson,
    setCors,
    logRequest,
    logError,
    authorizeRole,
    paginate,
    }
