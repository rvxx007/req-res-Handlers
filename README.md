
![Logo](https://github.com/rvxx007/req-res-Handlers/blob/main/public/poster.jpeg)
# <img src="https://github.com/rvxx007/req-res-Handlers/blob/main/public/logo.png" width="20" height="20"> req-res-Handlers

**req-res-Handlers** is a versatile npm package designed to simplify the handling of HTTP requests and responses in Express applications. It provides a suite of utility functions that streamline common tasks, enhance error handling, and configure essential middleware, enabling developers to focus on building robust server applications.
## Features

### ⚙️ Response Handling Functions

- **📝 resFunc**:
A standardized method for sending JSON responses to clients. This function ensures consistency and structure across all API responses, making it easier for developers to manage and understand response formats. It validates input parameters for type safety, throwing errors when expectations are not met.

- **❌ catchFunc**:
An error handling utility that formats error responses effectively. This function improves communication with clients by providing clear and concise error messages, facilitating easier troubleshooting. It also validates the input parameters to ensure correct usage.

### 🛠️ Middleware Setup Functions

- **📂 setPublicDirFunc(app, express, path, __dirname, dirPath = "public")**:
Configures a public directory in your Express application for serving static files. This function enhances asset accessibility by enabling the app to serve images, CSS, and JavaScript files from the specified directory. If no directory is provided, it defaults to the 'public' directory, leveraging Node.js's path module for accurate path generation.

- **🔗 setExpressUrlencodedAndJson(app, express)**:
Sets up middleware for parsing incoming requests with JSON and URL-encoded payloads. This allows your application to handle various content types seamlessly, ensuring better compatibility with client requests.

- **🖼️ setTemplateEngineFunc(app, path, __dirname, viewDirPath = 'views', viewEngine = 'ejs')**:
Configures the template engine and views directory for the Express application. This enables dynamic content generation based on server-side logic, specifying the views directory (defaulting to 'views') and establishing the template engine (defaulting to 'ejs') for rendering views.

- **🌐 setCors(app, cors)**:
Enables Cross-Origin Resource Sharing (CORS), allowing your API to handle cross-origin requests. This feature enhances application flexibility by enabling it to interact with resources from different origins.

### 🔧 Basic Middleware Configuration

- **🛡️ setupBasicMiddlewaresConfig(app, express, path, cors, __dirname, publicDirPath = "public", viewDirPathForTemplateEngine = "views", viewEngineTemplateEngine = "ejs")**:
Streamlines the setup of essential middleware for an Express.js application. This comprehensive function configures middleware for parsing URL-encoded and JSON bodies, serving static files, setting up the template engine, and enabling CORS. By utilizing several helper functions, it ensures your application is correctly configured from the start.

### 📁 File Response Function

- **📄 resSendFileFunc(res, filePath, path, __dirname)**:
A utility for sending files as responses, simplifying the delivery of static files to clients. This function constructs the complete file path using the current directory and the specified relative file path, ensuring compatibility across different operating systems. It efficiently utilizes the Express response object to send files, streamlining file delivery in your application.

### 📁 Utility Functions

- **🚨 isRequired(value)**:
Throws an error if the required value is not provided. This function enforces input validation, helping to prevent runtime errors by ensuring necessary parameters are passed.

- **💡 resFunc(res, statusCode, success, msg, body)**:
Sends a structured JSON response to the client, validating input types to ensure correctness. It takes parameters for the response object, status code, success flag, message, and response body, throwing errors if the parameters do not meet expectations.

- **❗ catchFunc(res, statusCode, msg, error)**:
Sends error responses to clients, providing clear messaging and the error details. This function takes the response object, status code, message, and error object, ensuring that only valid parameters are processed.
## Documentation

[Documentation](https://linktodocumentation)


## Installation

Install Package with npm

```bash
  npm i req-res-handlers
```
    
## Usage/Examples

```javascript
import { 
resFunc, 
catchFunc, 
setPublicDirFunc, 
setExpressUrlendodedAndJson, 
setTemplateEngineFunc, 
setCors, 
setupBasicMiddlewaresConfig, 
resSendFileFunc } from 'req-res-Handlers'
```

-----

## 📝 resFunc

-----

The `resFunc` function is designed to send a structured JSON response to the client. This function is particularly useful in web applications built using frameworks like Express.

### Function Signature

```javascript
resFunc(res, statusCode, success, msg, body)
```

### Parameters

- **res (Object)**:  
  The response object from your web framework (e.g., Express).

- **statusCode (Number)**:  
  The HTTP status code to return (e.g., `200` for success, `404` for not found).

- **success (Boolean)**:  
  Indicates whether the response is successful (`true`) or not (`false`).

- **msg (String)**:  
  A message to communicate to the client, which can be a success message or an error description.

- **body (Object)**:  
  The data to be sent as part of the response. This can include any relevant information the client needs.

### Example Usage

```javascript
resFunc(res, 200, true, "Request was successful", { data: "Your data here" });
```

### Notes

- Ensure that the `res` object is a valid response object from your framework.
- The function can be tailored to suit specific needs by modifying the structure of the `msg` or `body`.

-----

## ❌ catchFunc

-----

The `catchFunc` function is designed to handle error responses in web applications. It sends a structured error message to the client, making it easier to debug and understand issues.

### Function Signature

```javascript
catchFunc(res, statusCode, msg, error)
```

### Parameters

- **res (Object)**:  
  The response object from your web framework (e.g., Express).

- **statusCode (Number)**:  
  The HTTP status code to return (e.g., `500` for a server error).

- **msg (String)**:  
  A message for the client that provides information regarding the error.

- **error (Object)**:  
  The error object received from a catch block, which contains details about the error.

### Example Usage

```javascript
import { catchFunc } from 'response-utils';

catchFunc(response, 500, 'An error occurred', { error: 'Internal Server Error' });
```

### Integration Example

Here’s how you might use `catchFunc` in an Express route:

```javascript
app.get('/data', (req, res) => {
    fetchData()
        .then(data => {
            resFunc(res, 200, true, 'Data fetched successfully', data);
        })
        .catch(error => {
            catchFunc(res, 500, 'An error occurred', error);
        });
});
```

### Notes

- Ensure that the `res` object is a valid response object from your framework.
- The error object can contain any relevant information that can help in debugging.

-----

## 📂 setPublicDirFunc

-----

`setPublicDirFunc` is a utility function that configures an Express.js application to serve static files (such as images, CSS, and JavaScript) from a specified directory. This simplifies the setup of public directories in Express applications, ensuring that assets are served efficiently.

## Parameters:

- **app (Object)**: The Express application instance.
- **express (Object)**: The Express module (usually imported as `express`).
- **path (Object)**: The Node.js path module, used for handling file system paths.
- **__dirname (string)**: The directory from which the module is executed. This helps in constructing the correct file paths.
- **dirPath (string, optional)**: The directory path where static files are stored. Defaults to `'public'` if not specified.

## Functionality:

The `setPublicDirFunc` sets up middleware for serving static files from a given directory within your Express app. If no directory is provided, it defaults to the `'public'` directory. This function uses the path module to create the correct file path relative to the application's root directory.

## Usage Example:

```javascript
const express = require('express');
const path = require('path');
const { setPublicDirFunc } = require('req-res-handler');
const app = express();

// Serve static files from the 'assets' directory
setPublicDirFunc(app, express, path, __dirname, 'assets');

```

-----

## 🔗 setExpressUrlendodedAndJson(app, express)

-----

Configures the Express app to parse incoming requests with JSON and URL-encoded payloads.

### Parameters

- **app** (Express app): The Express application instance.
- **express** (Express module): The Express library used for middleware.

### Example

```javascript
const express = require('express');
const { setExpressUrlendodedAndJson } = require('req-res-handler');
const app = express();

setExpressUrlendodedAndJson(app, express);  // Sets up JSON and URL-encoded parsers
```

-----

# 🖼️ setTemplateEngineFunc

-----

Configures the template engine and views directory for an Express application.

## Parameters

- `app` (Express app): The Express application instance.
- `path` (Node.js path module): The Node.js path module, used for handling file and directory paths.
- `__dirname` (string): The directory name of the current module, typically obtained via:

    ```javascript
    import { fileURLToPath } from 'url';
    import path, { dirname } from 'path';
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    ```

- `viewDirPath` (string, optional): The directory where view templates are stored. Defaults to `'views'`.
- `viewEngine` (string, optional): The template engine to use, such as `'ejs'` or `'pug'`. Defaults to `'ejs'`.

## Example

```javascript
const express = require('express');
const path = require('path');
const { fileURLToPath } = require('url');
const { dirname } = require('path');
const { setTemplateEngineFunc } = require('req-res-handler');

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Configuring the template engine to use 'pug' and 'templates' directory for views
setTemplateEngineFunc(app, path, __dirname, 'templates', 'pug');
```
-----

## 🌐 setCors(app, cors)

-----

Configures Cross-Origin Resource Sharing (CORS) for an Express application.

This function integrates the CORS middleware into the provided Express app to handle requests from different origins. CORS is essential for enabling or restricting resource sharing between different domains, allowing seamless communication between a frontend hosted on one domain and a backend on another.

## Parameters

- **app (Object)**: The Express application instance.
- **cors (Function)**: The CORS middleware function to handle cross-origin requests.

## Usage

```javascript
const express = require('express');
const cors = require('cors');
const { setCors } = require('req-res-handler');

const app = express();

// Configure CORS for the Express app
setCors(app, cors);  // Enables cross-origin resource sharing

```
-----
# 🛡️ setupBasicMiddlewaresConfig
-----

`setupBasicMiddlewaresConfig` sets up essential middlewares for an Express.js application, including parsing request bodies, serving static files, enabling CORS, and configuring the template engine for server-side rendering.

## Functionality Overview

- **Body Parsing**: Configures the app to handle URL-encoded and JSON request bodies.
- **Static Files**: Serves static files (e.g., images, CSS, JavaScript) from a specified directory.
- **Template Engine**: Sets up the template engine for rendering server-side views.
- **CORS**: Enables Cross-Origin Resource Sharing to handle requests from different origins.

## Parameters

- `app` (Object): The Express application instance.
- `express` (Object): The Express.js module, used for setting middleware.
- `path` (Object): The Node.js `path` module, for handling file paths.
- `cors` (Object): CORS middleware, for enabling cross-origin resource sharing.
- `__dirname` (string): The current directory path of the module, useful for resolving static and template directories.
- `publicDirPath` (string, optional): The directory path for serving static files. Defaults to `'public'`.
- `viewDirPathForTemplateEngine` (string, optional): The directory path for the template engine views. Defaults to `'views'`.
- `viewEngineTemplateEngine` (string, optional): The template engine to use for rendering views. Defaults to `'ejs'`.

## Helper Functions

Internally, this function leverages the following helper methods to set up the middlewares:

- `setExpressUrlendodedAndJson(app, express)`: Configures the app to parse URL-encoded and JSON request bodies.
- `setPublicDirFunc(app, express, __dirname, publicDirPath)`: Sets the directory for serving static files.
- `setTemplateEngineFunc(app, path, __dirname, viewDirPathForTemplateEngine, viewEngineTemplateEngine)`: Configures the template engine and views directory.
- `setCors(app, cors)`: Enables CORS to handle cross-origin requests.

## Example Usage

```javascript
const express = require('express');
const path = require('path');
const cors = require('cors');
const { setupBasicMiddlewaresConfig } = require('req-res-handler');

const app = express();
const __dirname = path.resolve();

setupBasicMiddlewaresConfig(app, express, path, cors, __dirname, 'assets', 'templates', 'pug');
```
-----

# 📄 resSendFileFunc

-----

### Description
The `resSendFileFunc` function sends a file to the client by constructing the full file path based on the current directory and the specified file path. It uses the Express response object to send the file.

### Parameters
- `res` (Response object): The Express response object used to send the file to the client.
- `filePath` (string): The relative path to the file that should be sent.
- `path` (Node.js path module): The Node.js 'path' module, used for constructing file paths in a cross-platform way.
- `__dirname` (string): The directory name from which the server is running, typically provided by `__dirname`.

### Usage
This function constructs the file's absolute path by joining the current directory (`__dirname`) with the provided `filePath` using `path.join()`. This ensures compatibility across operating systems. The file is then sent to the client using the `res.sendFile()` method.

### Example

```javascript
const express = require('express');
const path = require('path');
const { resSendFileFunc } = require('req-res-handler');
const app = express();

app.get('/download', (req, res) => {
  // Sends 'example.pdf' from the '/files' directory to the client
  resSendFileFunc(res, '/files/example.pdf', path, __dirname);
});

```
## License

[MIT](https://choosealicense.com/licenses/mit/)


## 👤 Author/Contact

- <a style="display:flex; justify-content: center; align-items: center;" href="https://github.com/rvxx007"><img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" width="20" height="20"> @rvxx007</a>
- <a style="display:flex; justify-content: center; align-items: center;" href="mailto:akashkawle0@gmail.com"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Gmail_Icon.png/512px-Gmail_Icon.png" width="20" height="20"> akashkawle0@gmail.com</a>
- <a href="https://www.linkedin.com/in/akash-kawale-5a4393212/"><img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" width="20" height="20"> Akash Kawale</a>
- <a href="https://www.instagram.com/akashkawle05/profilecard/?igsh=MWxnZ2VxZHFvMzNudw=="><img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" width="20" height="20"> akashkawale05</a>