
// if we required any value that time we can use this funtion to thow the Exception
// this Function take value and throw Exception 
function isRequired(any:any) {
    throw new Error(`${any} is Required`)
}


// This function take some parameter like response Object , statusCode (like 200 for success, 404 not found, etc. )
// success indicate response is successful or not thats why it take boolean value.
// msg take String type of data for Successful message or error message.
// body is a object which is use to send json object data as response.
function resFunc(res:any,statusCode:number,success:boolean,msg:string,body:object){
    
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
function catchFunc(res:any,statusCode:number,msg:string,error:object){
    
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


/**
 * Sets up a public directory for serving static files in an Express app.
 *
 * @param {object} app - The Express application instance.
 * @param {object} express - The Express module (typically imported as `express`).
 * @param {object} path - The Node.js `path` module for handling file and directory paths.
 * @param {string} __dirname - The directory name from which the module is being executed.
 *                            This is typically obtained using:
 *                            import { fileURLToPath } from 'url';
 *                            import path, { dirname } from 'path';
 *                            const __filename = fileURLToPath(import.meta.url);
 *                            const __dirname = dirname(__filename);
 * @param {string} dirPath - The path to the directory from which static files should be served. 
 *                           Defaults to 'public' if no directory path is specified.
 *
 * This function configures the Express app to serve static assets (like images, CSS, and JavaScript files)
 * from the specified directory. If no directory is provided, it defaults to the 'public' directory.
 * It utilizes the `path` module to ensure the correct path is generated based on the application's directory structure.
 */
function setPublicDirFunc(app: any, express: any, path: any, __dirname: string, dirPath: string = "public") {
    // Serve static files from the specified directory
    app.use(express.static(path.join(__dirname, dirPath)));
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
 * Configures the template engine and views directory for the Express application.
 *
 * @param {Object} app - The Express application instance.
 * @param {string} [viewDirPath='views'] - The directory path for the views (default is 'views').
 * @param {Object} path - The Node.js path module for handling file and directory paths.
 * @param {string} __dirname - The directory name of the current module, typically obtained using:
 *                             `import { fileURLToPath } from 'url';`
 *                             `import path, { dirname } from 'path';`
 *                             `const __filename = fileURLToPath(import.meta.url);`
 *                             `const __dirname = dirname(__filename);`
 * @param {string} [viewEngine='ejs'] - The template engine to be used (default is 'ejs').
 *
 * @example
 * const express = require('express');
 * const path = require('path');
 * const app = express();
 * const { fileURLToPath } = require('url');
 * const { dirname } = require('path');
 * const __filename = fileURLToPath(import.meta.url);
 * const __dirname = dirname(__filename);
 *
 * setTemplateEngineFunc(app, 'views', path, __dirname, 'ejs');
 */
function setTemplateEngineFunc(app: any,path: any, __dirname: string, viewDirPath: string = 'views', viewEngine: string = 'ejs') {
    app.set('views', path.join(__dirname, viewDirPath));
    app.set('view engine', viewEngine);
}


/**
 * Configures CORS (Cross-Origin Resource Sharing) for the Express application.
 * 
 * This function adds middleware to the Express application to handle 
 * Cross-Origin Resource Sharing (CORS) issues. CORS is essential for allowing 
 * or restricting resources on a web server based on the origin of the request.
 * 
 * By enabling CORS, the server can accept requests from different domains, 
 * which is often necessary for seamless frontend and backend communication 
 * across various servers.
 * 
 * @param {Object} app - The Express application instance.
 * @param {Object} cors - The CORS middleware module.
 * 
 * @example
 * import cors from 'cors';
 * setCors(app, cors);
 * 
 * In this example, the `cors` middleware is imported and then used to configure 
 * the Express app to handle CORS-related requests.
 */
function setCors(app: any, cors: any) {
    // Middleware to handle Cross-Origin Resource Sharing errors
    app.use(cors());
}


/**
 * Configures basic middlewares for an Express.js application.
 * 
 * This function sets up common middlewares for the Express app including:
 * - Parsing URL-encoded and JSON request bodies
 * - Serving static files from a specified public directory
 * - Configuring the template engine for server-side rendering
 * - Enabling Cross-Origin Resource Sharing (CORS)
 * 
 * @param {Object} app - The Express.js application instance to configure middlewares for.
 * @param {Object} express - The Express.js module, used for setting up middleware functions.
 * @param {Object} path - The Node.js path module, used for handling and transforming file paths.
 * @param {Object} cors - The CORS middleware, used for enabling Cross-Origin Resource Sharing.
 * @param {string} __dirname - The current directory name of the module, useful for resolving paths.
 * @param {string} [publicDirPath="public"] - The path to the directory containing static files (e.g., images, CSS, JavaScript) to be served. Default is 'public'.
 * @param {string} [viewDirPathForTemplateEngine="views"] - The directory path for the template engine views. Default is 'views'.
 * @param {string} [viewEngineTemplateEngine="ejs"] - The template engine to use for rendering views. Default is 'ejs'.
 * 
 * The function internally calls the following helper functions:
 * 1. `setExpressUrlendodedAndJson(app, express)` - Configures the app to parse URL-encoded and JSON request bodies.
 * 2. `setPublicDirFunc(app, express, __dirname, publicDirPath)` - Sets the static file directory.
 * 3. `setTemplateEngineFunc(app, path, __dirname, viewDirPathForTemplateEngine, viewEngineTemplateEngine)` - Configures the app to use a specific template engine.
 * 4. `setCors(app, cors)` - Enables CORS on the application to handle cross-origin requests.
 */
function setupBasicMiddlewaresConfig(app: any, express: any, path: any, cors: any, __dirname: string, publicDirPath: string = "public", viewDirPathForTemplateEngine: string = 'views', viewEngineTemplateEngine: string = 'ejs') {
    setExpressUrlendodedAndJson(app, express);
    setPublicDirFunc(app, express, __dirname, publicDirPath);
    setTemplateEngineFunc(app, path, __dirname, viewDirPathForTemplateEngine, viewEngineTemplateEngine);
    setCors(app, cors);
}


/**
 * Sends a file to the client using the specified response object and file path.
 * 
 * @param {Object} res - The response object (usually from Express) used to send the file to the client.
 * @param {string} filePath - The relative path to the file that should be sent.
 * @param {Object} path - The Node.js 'path' module, used for handling file and directory paths.
 * @param {string} __dirname - The directory name from which the server is running, typically provided by `__dirname` .
 * 
 * This function constructs the full file path by joining the current directory (`dirname`) 
 * with the provided `filePath` using the `path.join()` method to ensure compatibility 
 * across different operating systems. It then uses the `res.sendFile()` method to send 
 * the file to the client.
 * 
 * Example usage:
 * 
 *    resSendFileFunc(res, '/files/example.pdf', path, __dirname);
 * 
 * In this example, the server will send the `example.pdf` file located in the `/files` directory.
 */
function resSendFileFunc(res: any, filePath: string, path: any, __dirname: string) {
    res.sendFile(path.join(__dirname, filePath));
}


export {resFunc,
    catchFunc,
    setPublicDirFunc,
    setExpressUrlendodedAndJson,
    setTemplateEngineFunc,
    setCors,
    setupBasicMiddlewaresConfig,
    resSendFileFunc}
