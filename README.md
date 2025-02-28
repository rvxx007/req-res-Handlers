
![Logo](https://github.com/rvxx007/req-res-Handlers/blob/main/public/poster.jpeg)
![Logo]<img src="https://github.com/rvxx007/req-res-Handlers/blob/main/public/logo.png" width="60" height="60"> req-res-Handlers

# req-res-handlers 📦 (Handle Express Response & Utility Functions)

`req-res-handlers` is a versatile utility package designed to simplify the handling of HTTP requests and responses in Express.js applications. It provides a suite of functions that streamline common tasks, improve error handling, and configure middleware, making it easier for developers to create robust and maintainable server applications.

This package includes utility functions for managing HTTP responses with various status codes, ranging from informational responses (1xx) to success responses (2xx), redirections (3xx), client errors (4xx), and server errors (5xx). Each function ensures standardized formatting for better readability and easier debugging.

---

## Table of Contents 📚

- [Installation](#installation)
- [Usage](#usage)
  - [Sending Informational Responses (1xx)](#sending-informational-responses-1xx)
  - [Sending Success Responses (2xx)](#sending-success-responses-2xx)
  - [Sending Redirection Responses (3xx)](#sending-redirection-responses-3xx)
  - [Sending Client Error Responses (4xx)](#sending-client-error-responses-4xx)
  - [Sending Server Error Responses (5xx)](#sending-server-error-responses-5xx)
  - [Additional Utilities](#additional-utilities)
- [Middleware](#middleware)
  - [Logging](#logging)
  - [CORS](#cors)
  - [Role Authorization](#role-authorization)
  - [Pagination](#pagination)
- [Example Code](#example-code)

---

## Installation ⚡

To install `req-res-handlers`, run the following command:

```bash
npm install req-res-handlers
```

---

## Usage 📜

### Sending Informational Responses (1xx)

Use these functions to send informational responses, such as "100 Continue", "101 Switching Protocols", or "102 Processing". These are typically used for interim responses and don't carry much content.

```typescript
import { sendInformationalResponse } from "req-res-handlers";

app.get('/status', (req, res) => {
  sendInformationalResponse(res, 100, "Continue", { data: "Some information" });
  // OR
  send1xxInformationalResponse(res, 100, "Continue", { data: "Some information" });
});
```

### Sending Success Responses (2xx)

These functions handle success responses like "200 OK", "201 Created", and "204 No Content". Use these to send the appropriate HTTP status code along with a message and optional data.

```typescript
import { sendSuccessResponse } from "req-res-handlers";

app.get('/data', (req, res) => {
  sendSuccessResponse(res, 200, "Data fetched successfully", { name: "John Doe" });
  // OR
  send2xxSuccessResponse(res, 200, "Data fetched successfully", { name: "John Doe" });
});
```

### Sending Redirection Responses (3xx)

If you need to redirect the user, you can use these functions to send HTTP status codes like "301 Moved Permanently", "302 Found", or "307 Temporary Redirect".

```typescript
import { sendRedirectionResponse } from "req-res-handlers";

app.get('/old-path', (req, res) => {
  sendRedirectionResponse(res, 301, "Resource moved to new location", { url: "https://new-url.com" });
  // OR
  send3xxRedirectionResponse(res, 301, "Resource moved to new location", { url: "https://new-url.com" });
});
```

### Sending Client Error Responses (4xx)

For client-side errors, such as "400 Bad Request" or "404 Not Found", use these functions to send the appropriate error messages and status codes.

```typescript
import { sendClientErrorResponse } from "req-res-handlers";

app.get('/user/:id', (req, res) => {
  const user = getUserById(req.params.id);
  if (!user) {
    sendClientErrorResponse(res, 404, "User not found");
    // OR
    send4xxClientErrorResponse(res, 404, "User not found");
  } else {
    res.json(user);
  }
});
```

### Sending Server Error Responses (5xx)

These functions help handle server-side errors such as "500 Internal Server Error" or "503 Service Unavailable". They are useful for communicating issues within your server.

```typescript
import { sendServerErrorResponse } from "req-res-handlers";

app.get('/data', (req, res) => {
  try {
    fetchData();
  } catch (error) {
    sendServerErrorResponse(res, 500, "Failed to fetch data", { error: error.message });
    // OR
    send5xxServerErrorResponse(res, 500, "Failed to fetch data", { error: error.message });
  }
});
```

### Additional Utilities

- **Error Message Response**: For simple error messages without detailed data:

```typescript
import { sendErrorMsgResponse } from "req-res-handlers";

app.get('/error', (req, res) => {
  sendErrorMsgResponse(res, 503, "Service is down for maintenance");
});
```

- **Catch Response**: For catching unexpected errors and sending a generic response:

```typescript
import { sendCatchResponse } from "req-res-handlers";

app.get('/error', (req, res) => {
  try {
    throw new Error("Something went wrong");
  } catch (error) {
    sendCatchResponse(res, "Unexpected error occurred", error);
  }
});
```

---

## Middleware ⚙️

### Logging 📊

`logRequest` logs incoming HTTP requests with their corresponding responses, which can help with monitoring and debugging.

```typescript
import { logRequest } from "req-res-handlers";

app.use(logRequest);
```

### CORS 🌍

`setCors` configures CORS middleware to allow requests from specified origins with specified HTTP methods.

```typescript
import { setCors } from "req-res-handlers";
import cors from "cors";

setCors(app, cors, ["https://example.com"], ["GET", "POST"]);
```

### Role Authorization 🔐

Ensure only users with the specified role can access a route.

```typescript
import { authorizeRole } from "req-res-handlers";

app.get('/admin', authorizeRole("admin"), (req, res) => {
  res.send("Admin dashboard");
});
```

### Pagination 📄

Use `paginate` to paginate an array of items (e.g., for displaying lists of data with pagination).

```typescript
import { paginate } from "req-res-handlers";

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const page1 = paginate(data, 1, 3); // [1, 2, 3]
const page2 = paginate(data, 2, 3); // [4, 5, 6]
```

---

## Example Code 💻

Here’s an example of how you might use the package to set up an Express app with the provided functions:

```typescript
import express from 'express';
import {
  sendSuccessResponse,
  sendClientErrorResponse,
  sendServerErrorResponse,
  logRequest,
  setCors,
  paginate
} from 'req-res-handlers';

const app = express();

// Setup logging
app.use(logRequest);

// Setup CORS for specific origins
setCors(app, require('cors'), ['https://example.com']);

// Example endpoint
app.get('/users', (req, res) => {
  try {
    const users = [/* Array of users */];
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 5;
    const paginatedUsers = paginate(users, page, limit);
    sendSuccessResponse(res, 200, 'Users fetched successfully', paginatedUsers);
  } catch (error) {
    sendServerErrorResponse(res, 500, 'Error fetching users');
  }
});

// Example error handling
app.get('/notfound', (req, res) => {
  sendClientErrorResponse(res, 404, 'Resource not found');
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
```

---


## License

`req-res-handlers` is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more details.
[MIT](https://choosealicense.com/licenses/mit/)


## 👤 Author/Contact

- <a style="display:flex; justify-content: center; align-items: center;" href="https://github.com/rvxx007"><img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" width="20" height="20"> @rvxx007</a>
- <a style="display:flex; justify-content: center; align-items: center;" href="mailto:akashkawle0@gmail.com"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Gmail_Icon.png/512px-Gmail_Icon.png" width="20" height="20"> akashkawle0@gmail.com</a>
- <a href="https://www.linkedin.com/in/akash-kawale-5a4393212/"><img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" width="20" height="20"> Akash Kawale</a>
- <a href="https://www.instagram.com/_._akash.kawale_._"><img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" width="20" height="20">_._akash.kawale_._</a>