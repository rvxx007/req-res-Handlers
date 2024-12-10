
![Logo](https://github.com/rvxx007/req-res-Handlers/blob/main/public/poster.jpeg)
# <img src="https://github.com/rvxx007/req-res-Handlers/blob/main/public/logo.png" width="20" height="20"> req-res-Handlers

**req-res-Handlers** is a versatile npm package designed to simplify the handling of HTTP requests and responses in Express applications. It provides a suite of utility functions that streamline common tasks, enhance error handling, and configure essential middleware, enabling developers to focus on building robust server applications.## Features

### ⚙️ Response Handling Functions

- **📝 sendResponse**:
A standardized method for sending JSON responses to clients. This function ensures consistency and structure across all API responses, making it easier for developers to manage and understand response formats. Sends a formatted JSON response to the client.

- **❌ errorHandler**:
An error handling utility that formats error responses effectively. This function improves communication with clients by providing clear and concise error messages, facilitating easier troubleshooting. Handles errors and sends appropriate responses.

### 🛠️ Middleware Setup Functions


- **🔗 setExpressUrlencodedAndJson(app, express)**:
Sets up middleware for parsing incoming requests with JSON and URL-encoded payloads. This allows your application to handle various content types seamlessly, ensuring better compatibility with client requests.

- **🌐 setCors(app, cors, originUrls, methods)**:
Enables Cross-Origin Resource Sharing (CORS), allowing your API to handle cross-origin requests. This feature enhances application flexibility by enabling it to interact with resources from different origins. Sets up CORS middleware for an Express application.

- **🌐 logRequest(req, res, next)**:
Logs incoming HTTP requests and their corresponding responses to the console. This is useful for debugging and monitoring application traffic.

- **🌐 logError(err, req, res, next)**:
Logs errors to the console and passes them to the next error-handling middleware. This helps in debugging and tracking errors within the application.

- **🌐 authorizeRole(role)**:
Authorizes requests based on the user's role. It checks if the user's role matches the specified role. If not, it returns a 403 Forbidden response.

- **🌐 paginate(items, page, limit)**:
Paginates an array of items. It takes an array of items, a page number, and a limit, and returns a new array containing the specified page of items.
## Documentation

[Documentation](https://github.com/rvxx007/req-res-Handlers/)
## Installation

Install Package with npm

```bash
  npm i req-res-handlers
```
        
## Usage/Examples

```javascript
import { 
    sendResponse,
    errorHandler,
    setExpressUrlendodedAndJson,
    setCors,
    logRequest,
    logError,
    authorizeRole,
    paginate, } from 'req-res-Handlers';
    
```
### 1. sendResponse

- **Purpose:** Standardizes JSON response formatting for various HTTP status codes and success/failure scenarios.
- **Key points:**
    Ensures type safety for input parameters.
    Provides a consistent response structure.
    Can be used for both success and error responses.
**Example:**
```JavaScript
// Successful response
sendResponse(res, 200, true, 'User created successfully', { userId: 123 });

// Error response
sendResponse(res, 400, false, 'Invalid input data', { error: 'Missing required field' });
```

### 2. errorHandler

- **Purpose:** Centralized error handling for Express applications, logging errors and sending appropriate responses.
- **Key points:**
    Logs the error stack for debugging.
    Sends a standardized error response.
    Can be used as a global error handler.

**Example:**
```JavaScript
// Global error handler
app.use((err, req, res, next) => {
    errorHandler(err, res, 500, 'Internal Server Error');
});
```

### 3. setExpressUrlendodedAndJson

Purpose: Configures Express to parse JSON and URL-encoded request bodies.
- **Key points:**
    Essential for handling form submissions and API requests.
    Ensures proper data extraction from requests.

**Example:**
```JavaScript
// In your app initialization:
setExpressUrlendodedAndJson(app, express);
```

### 4. setCors

Purpose: Enables Cross-Origin Resource Sharing (CORS) to allow requests from different origins.
- **Key points:**
    Prevents security issues related to cross-origin requests.
    Configures allowed origins, methods, and headers.

**Example:**
```JavaScript
// In your app initialization:
setCors(app, cors, ['http://example.com', 'https://api.example.com']);
```

### 5. logRequest

Purpose: Logs incoming HTTP requests for monitoring and debugging.
- **Key points:**
    Provides insights into application traffic.
    Helps identify performance bottlenecks and potential issues.

**Example:**
```JavaScript
// In your middleware stack:
app.use(logRequest);
```

### 6. logError

Purpose: Logs errors to the console for debugging and passes them to the next error handler.
- **Key points:**
    Provides detailed error information.
    Can be used in conjunction with other error-handling middleware.

**Example:**
```JavaScript
// In your error-handling middleware stack:
app.use(logError);
```

### 7. paginate

Purpose: Implements pagination for large datasets.
- **Key points:**
    Divides data into smaller, manageable pages.
    Improves performance and user experience.

**Example:**
```JavaScript
// Paginate a list of users:
const paginatedUsers = paginate(users, 2, 10);
```

### 8. authorizeRole

Purpose: Enforces role-based access control.
- **Key points:**
    Protects sensitive routes from unauthorized access.
    Can be used to implement granular permissions.

**Example:**
```JavaScript
// Protect an admin-only route:
router.get('/admin', authorizeRole('admin'), (req, res) => {...}

```
## License

[MIT](https://choosealicense.com/licenses/mit/)


## 👤 Author/Contact

- <a style="display:flex; justify-content: center; align-items: center;" href="https://github.com/rvxx007"><img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" width="20" height="20"> @rvxx007</a>
- <a style="display:flex; justify-content: center; align-items: center;" href="mailto:akashkawle0@gmail.com"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Gmail_Icon.png/512px-Gmail_Icon.png" width="20" height="20"> akashkawle0@gmail.com</a>
- <a href="https://www.linkedin.com/in/akash-kawale-5a4393212/"><img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" width="20" height="20"> Akash Kawale</a>
- <a href="https://www.instagram.com/akashkawle05/profilecard/?igsh=MWxnZ2VxZHFvMzNudw=="><img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" width="20" height="20"> akashkawale05</a>