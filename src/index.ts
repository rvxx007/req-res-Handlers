import cors from 'cors';
import { fileURLToPath } from 'url';
import path,{ dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


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
 * @param {express app} app - The Express application instance.
 * @param {express} express - The Express module (typically imported as `express`).
 * @param {string} dirPath - The path to the directory from which static files should be served. 
 *                           Defaults to 'public' if no directory path is specified.
 *
 * This function configures the Express app to serve static assets (like images, CSS, and JavaScript files)
 * from the specified directory. If no directory is provided, it defaults to the 'public' directory.
 */
function setPublicDirFunc(app:any,express:any,dirPath:string ="public"){
    // Serve static files from the 'public' directory
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
 * Configures the template engine for an Express application.
 *
 * @param {express app} app - The Express application instance.
 * @param {string} [viewDirPath='views'] - Optional. The directory where the view templates are stored. Defaults to 'views'.
 * @param {string} [viewEngine='ejs'] - Optional. The templating engine to use (e.g., 'ejs', 'pug'). Defaults to 'ejs'.
 *
 * This function sets the directory for the view templates and configures the view engine that will be used
 * to render the templates in the Express application.
 *
 * - `app.set('views', path.join(__dirname, viewDirPath))`: Sets the directory where the view templates (like EJS or Pug files) are located.
 * - `app.set('view engine', viewEngine)`: Sets the template engine that the app will use to render the views.
 */
function setTemplateEngineFunc(app:any,viewDirPath:string = 'views', viewEngine:string = 'ejs') {
    app.set('views', path.join(__dirname, viewDirPath));
    app.set('view engine', viewEngine);
}


/**
 * Configures CORS (Cross-Origin Resource Sharing) for the Express app.
 * 
 * This function adds middleware to the Express application to handle 
 * Cross-Origin Resource Sharing (CORS) issues. CORS is used to allow or 
 * restrict resources on a web server based on the origin of the request.
 * 
 * By enabling CORS, the server can handle requests from different domains, 
 * which is often required for frontend and backend communication across 
 * different servers.
 * 
 * @param {express app} app - The Express application instance.
 */
function setCors(app:any){
    // use for handling Cross Origin Related Errors
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
 * @param {express app} app - The Express.js application instance to configure middlewares for.
 * @param {express} express - The Express.js module, used for setting up middleware functions.
 * @param {string} [publicDirPath="public"] - The path to the directory containing static files (e.g., images, CSS, JavaScript) to be served. Default is 'public'.
 * @param {string} [viewDirPathForTemplateEngine="views"] - The directory path for the template engine views. Default is 'views'.
 * @param {string} [viewEngineTemplateEngine="ejs"] - The template engine to use for rendering views. Default is 'ejs'.
 * 
 * The function internally calls the following helper functions:
 * 1. `setExpressUrlendodedAndJson(app, express)` - Configures the app to parse URL-encoded and JSON request bodies.
 * 2. `setPublicDirFunc(app, express, publicDirPath)` - Sets the static file directory.
 * 3. `setTemplateEngineFunc(app, viewDirPathForTemplateEngine, viewEngineTemplateEngine)` - Configures the app to use a specific template engine.
 * 4. `setCors(app)` - Enables CORS on the application to handle cross-origin requests.
 */
function setupBasicMiddlewaresConfig(app:any , express:any, publicDirPath:string ="public",viewDirPathForTemplateEngine:string = 'views', viewEngineTemplateEngine:string = 'ejs'){
    setExpressUrlendodedAndJson(app,express);
    setPublicDirFunc(app,express,publicDirPath);
    setTemplateEngineFunc(app,viewDirPathForTemplateEngine,viewEngineTemplateEngine)
    setCors(app);
}


export {resFunc,
    catchFunc,
    setPublicDirFunc,
    setExpressUrlendodedAndJson,
    setTemplateEngineFunc,
    setCors,
    setupBasicMiddlewaresConfig,
    }
