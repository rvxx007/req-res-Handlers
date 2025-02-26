
![Logo](https://github.com/rvxx007/req-res-Handlers/blob/main/public/poster.jpeg)
# <img src="https://github.com/rvxx007/req-res-Handlers/blob/main/public/logo.png" width="20" height="20"> req-res-Handlers


# req-res-Handlers - Express Response Utility Functions
**req-res-Handlers** is a versatile npm package designed to simplify the handling of HTTP requests and responses in Express applications. It provides a suite of utility functions that streamline common tasks, enhance error handling, and configure essential middleware, enabling developers to focus on building robust server applications.
This repository provides a collection of utility functions to manage HTTP responses in an Express.js application. These functions cover various response categories such as informational, success, redirection, client errors, server errors, and more. Each function aims to standardize response formatting, improve code maintainability, and enhance readability for better handling of different types of HTTP status codes.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
  - [Informational Responses](#informational-responses)
  - [Success Responses](#success-responses)
  - [Redirection Responses](#redirection-responses)
  - [Client Error Responses](#client-error-responses)
  - [Server Error Responses](#server-error-responses)
- [Additional Features](#additional-features)
- [Contributing](#contributing)
- [License](#license)

## Installation

To use these response utility functions in your project, follow these steps:

1. Clone or download the repository.
2. Install the required dependencies by running:
   ```bash
   npm install express
   ```

3. Import the functions in your Express application:
   ```typescript
   import { sendInformationalResponse, sendSuccessResponse, sendClientErrorResponse, sendServerErrorResponse, setCors, logRequest } from './responseUtils';
   ```

## Usage

### Informational Responses (1xx)

These functions send HTTP responses with informational status codes (100, 101, 102). You can include optional data with the response.

#### `sendInformationalResponse(res, statusCode, msg, data?)`
Sends an informational HTTP response with an optional data payload.

```typescript
sendInformationalResponse(res, 100, "Continue processing", { extraData: "some data" });
```

### Success Responses (2xx)

These functions send HTTP responses with success status codes (200, 201, 202, etc.). You can include optional data with the response.

#### `sendSuccessResponse(res, statusCode, msg, data?)`
Sends a standardized success response with a 2xx status code.

```typescript
sendSuccessResponse(res, 200, "Request succeeded", { userId: 123 });
```

### Redirection Responses (3xx)

These functions send HTTP responses for redirection status codes (300, 301, 302, etc.).

#### `sendRedirectionResponse(res, statusCode, msg, data?)`
Sends a redirection response with a 3xx status code.

```typescript
sendRedirectionResponse(res, 301, "Resource moved", { newUrl: "https://newlocation.com" });
```

### Client Error Responses (4xx)

These functions send HTTP responses with client error status codes (400, 401, 403, etc.).

#### `sendClientErrorResponse(res, statusCode, msg, data?)`
Sends a client error response with a specified 4xx status code.

```typescript
sendClientErrorResponse(res, 404, "Resource not found", { resource: "user" });
```

### Server Error Responses (5xx)

These functions send HTTP responses with server error status codes (500, 502, 503, etc.).

#### `sendServerErrorResponse(res, statusCode, msg, data?)`
Sends a server error response with a specified 5xx status code.

```typescript
sendServerErrorResponse(res, 500, "Internal server error", { error: "Database connection failed" });
```

## Additional Features

- **CORS Setup**: Use `setCors()` to configure CORS middleware for your Express app.
  
  ```typescript
  setCors(app, cors, ['https://example.com'], ['GET', 'POST']);
  ```

- **Logging Requests**: Use `logRequest()` to log incoming requests.

  ```typescript
  app.use(logRequest);
  ```

- **Error Handling Middleware**: Use `logError()` to log error details.

  ```typescript
  app.use(logError);
  ```

- **Pagination**: Use `paginate()` to paginate arrays of items.

  ```typescript
  const items = [1, 2, 3, 4, 5];
  const page1 = paginate(items, 1, 2);  // [1, 2]
  ```

- **Role Authorization**: Use `authorizeRole()` to restrict access based on user roles.

  ```typescript
  const adminRoute = express.Router();
  adminRoute.use(authorizeRole('admin'));
  ```


## License

[MIT](https://choosealicense.com/licenses/mit/)


## 👤 Author/Contact

- <a style="display:flex; justify-content: center; align-items: center;" href="https://github.com/rvxx007"><img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" width="20" height="20"> @rvxx007</a>
- <a style="display:flex; justify-content: center; align-items: center;" href="mailto:akashkawle0@gmail.com"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Gmail_Icon.png/512px-Gmail_Icon.png" width="20" height="20"> akashkawle0@gmail.com</a>
- <a href="https://www.linkedin.com/in/akash-kawale-5a4393212/"><img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" width="20" height="20"> Akash Kawale</a>
- <a href="https://www.instagram.com/akashkawle05/profilecard/?igsh=MWxnZ2VxZHFvMzNudw=="><img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" width="20" height="20"> akashkawale05</a>