
![Logo](https://github.com/rvxx007/req-res-Handlers/blob/main/public/poster.jpeg)


# req-res-Handlers

**req-res-Handlers** is a versatile npm package designed to simplify the handling of HTTP requests and responses in Express applications. It provides a suite of utility functions that streamline common tasks, enhance error handling, and configure essential middleware, enabling developers to focus on building robust server applications.
## Features

#### ⚙️ Response Handling Functions:

- **📝resFunc:** A structured method to send JSON responses to clients, ensuring consistency across your API responses.
- **❌catchFunc:** An error handling utility that formats error responses, making it easier to communicate issues back to clients.

#### 🛠️ Middleware Setup Functions:

- **📂 setPublicDirFunc(app, express, dirPath):** Configures a public directory to serve static files, enhancing the accessibility of assets in your application.
- **🔗 setExpressUrlencodedAndJson(app, express):** Sets up middleware to parse incoming requests with JSON and URL-encoded payloads, enabling your application to handle various content types seamlessly.
- **🖼️ setTemplateEngineFunc(app, viewDirPath, viewEngine):** Configures a templating engine for rendering views, allowing for dynamic content generation based on server-side logic.
- **🌐 setCors(app):** Enables Cross-Origin Resource Sharing (CORS), facilitating cross-origin requests and enhancing the flexibility of your API.

#### 🔧 Basic Middleware Configuration:

- **🛡️ setupBasicMiddlewaresConfig(app, express, publicDirPath, viewDirPathForTemplateEngine, viewEngineTemplateEngine):** A comprehensive function that sets up multiple essential middleware in one go, ensuring your Express application is configured correctly from the start.

#### 📁 File Response Function:

- **📄resSendFileFunc(res, filePath):** A utility to send files as responses, simplifying the process of delivering static files to clients.

## 📚 Documentation

[Documentation](https://#)


## 📦 Installation

Install Package with npm

```bash
  npm i req-res-handlers
```
    
## 🚀 Usage/Examples

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

## 📂 setPublicDirFunc(app, express, dirPath)

-----

Sets up a public directory for serving static files.

### Parameters:
- `app` (Express app): The Express application instance.
- `express` (Express module): The Express module (typically imported as `express`).
- `dirPath` (string, optional): The directory path to serve static files from. Defaults to `'public'`.

### Example:
```javascript
const express = require('express');
const { setPublicDirFunc } = require('req-res-handler');
const app = express();

setPublicDirFunc(app, express, 'assets');  // Serves static files from 'assets' directory
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

## 🖼️ setTemplateEngineFunc(app, viewDirPath, viewEngine)

-----

Configures the template engine for the Express app.

### Parameters:
- **app** (Express app): The Express application instance.
- **viewDirPath** (string, optional): The directory where view templates are stored. Defaults to `'views'`.
- **viewEngine** (string, optional): The templating engine to use (e.g., `'ejs'`, `'pug'`). Defaults to `'ejs'`.

### Example:
```javascript
const express = require('express');
const { setTemplateEngineFunc } = require('req-res-handler');
const app = express();

setTemplateEngineFunc(app, 'templates', 'pug');  // Uses Pug as the view engine and 'templates' as the view directory
```
-----

## 🌐 setCors(app)

-----

Configures CORS (Cross-Origin Resource Sharing) for the Express app.

### Parameters

- **app** (Express app): The Express application instance.

### Example

```javascript
const express = require('express');
const cors = require('cors');
const { setCors } = require('req-res-handler');

const app = express();

setCors(app);  // Enables CORS for cross-origin requests
```

-----

# 🛡️ setupBasicMiddlewaresConfig

-----

Configures basic middlewares for an Express application, including:

- Parsing JSON and URL-encoded payloads.
- Serving static files from a public directory.
- Setting up a view template engine.
- Enabling CORS.

## Parameters

- **app** (Express app): The Express application instance.
- **express** (Express module): The Express library.
- **publicDirPath** (string, optional): The directory path for static files. Default is `'public'`.
- **viewDirPathForTemplateEngine** (string, optional): The directory path for template views. Default is `'views'`.
- **viewEngineTemplateEngine** (string, optional): The template engine to use. Default is `'ejs'`.

## Example

```javascript
const express = require('express');
const { setupBasicMiddlewaresConfig } = require('req-res-handler');
const app = express();

setupBasicMiddlewaresConfig(app, express, 'assets', 'templates', 'pug');
```
-----

# 📄 resSendFileFunc

-----

## Description
Sends a file to the client using the specified response object and file path.

## Parameters
- `res` (Response object): The Express response object.
- `filePath` (string): The relative path to the file that should be sent.

## Example

```javascript
const express = require('express');
const { resSendFileFunc } = require('req-res-handler');
const app = express();

app.get('/download', (req, res) => {
  resSendFileFunc(res, '/files/example.pdf');  // Sends 'example.pdf' to the client
});
```

## 📜 License

- [MIT](https://choosealicense.com/licenses/mit/)


## 👤 Author/Contact

- <a style="display:flex; justify-content: center; align-items: center;" href="https://github.com/rvxx007"><img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" width="20" height="20"> @rvxx007</a>
- <a style="display:flex; justify-content: center; align-items: center;" href="mailto:akashkawle0@gmail.com"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Gmail_Icon.png/512px-Gmail_Icon.png" width="20" height="20"> akashkawle0@gmail.com</a>
- <a href="https://www.linkedin.com/in/akash-kawale-5a4393212/"><img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" width="20" height="20"> Akash Kawale</a>
- <a href="https://www.instagram.com/akashkawle05/profilecard/?igsh=MWxnZ2VxZHFvMzNudw=="><img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" width="20" height="20"> akashkawale05</a>
