
![Logo](https://github.com/rvxx007/req-res-Handlers/blob/main/public/poster.jpeg)


# <img src="https://github.com/rvxx007/req-res-Handlers/blob/main/public/logov1.png" width="100%" height="100%"> 📦 (Handle Express Response & Utility Functions)

`req-res-handlers` is a versatile utility package designed to simplify the handling of HTTP requests and responses in Express.js applications. It provides a suite of functions that streamline common tasks, improve error handling, and configure middleware, making it easier for developers to create robust and maintainable server applications.

This package includes utility functions for managing HTTP responses with various status codes, ranging from informational responses (1xx) to success responses (2xx), redirections (3xx), client errors (4xx), and server errors (5xx). Each function ensures standardized formatting for better readability and easier debugging.

---

## Notes
There is two types of Functions
- NormalHandler function
- SendStatusCodeHandler function

### **NormalHandler Function**
when we use NormalHandler function to send response then it sends standard json response.
which contain this kind of json structure.
```json
{
  "success":"true",
  "msg":"test",
  "data":{
    // ...data
  }
}
```

### Syntax & Example
```javascript
// Syntax
// sendInformationalResponse(res, statusCode, message, data/object/array);
// Example
sendInformationalResponse(res, 100, "Continue", { data: "Some information" });
```

### **SendStatusCodeHandler Function**
when we use NormalHandler function to send response then it sends standard json response.
which contain this kind of json structure with statusCode. 

```json
{
  "success":"true",
  "statusCode":200,
  "msg":"test",
  "data":{
    // ...data
  }
}
```

### Syntax & Example
```javascript
// Syntax
// send1xxInformationalResponse(res, statusCode, message, data/object/array);

// Example
send1xxInformationalResponse(res, 100, "Continue", { data: "Some information" });
```

---

## Table of Contents 📚

- Installation
- StatusCodes & Messages
- Usage
  - [Sending Informational Responses (1xx)](#sending-informational-responses-1xx)
  - [Sending Success Responses (2xx)](#sending-success-responses-2xx)
  - [Sending Redirection Responses (3xx)](#sending-redirection-responses-3xx)
  - [Sending Client Error Responses (4xx)](#sending-client-error-responses-4xx)
  - [Sending Server Error Responses (5xx)](#sending-server-error-responses-5xx)
  - [Additional Utilities](#additional-utilities)
- Middleware
  - Logging
  - CORS
  - Role Authorization
  - Pagination
- Example Code

---

## Installation ⚡

To install `req-res-handlers`, run the following command:

```bash
npm install req-res-handlers
```

---
## StatusCodes & Messages 📜

- Informational Responses (1xx)
  - **100 Continue**: The server has received the request headers and the client should proceed to send the request body.
  - **101 Switching Protocols**: The requester has asked the server to switch protocols.
  - **102 Processing**: The server has received and is processing the request, but no response is available yet.
- Success (2xx)
  - **200 OK**: The request has succeeded.
  - **201 Created**: The request has been fulfilled and has resulted in one or more new resources being created.
  - **202 Accepted**: The request has been accepted for processing, but the processing has not been completed.
  - **203 Non-Authoritative Information**: The request was successful but the enclosed payload has been modified.
  - **204 No Content**: The server successfully processed the request and is not returning any content.
  - **205 Reset Content**: The server successfully processed the request, but is not returning any content, and requires the requester to reset the document view.
  - **206 Partial Content**: The server is delivering only part of the resource due to a range header sent by the client.
- Redirection (3xx)
  - **300 Multiple Choices**: The request has more than one possible response.
  - **301 Moved Permanently**: The URL of the requested resource has been changed permanently.
  - **302 Found**: The URI of the requested resource has been changed temporarily.
  - **303 See Other**: The response to the request can be found under another URI.
  - **304 Not Modified**: The resource has not been modified since the version specified by the request headers.
  - **307 Temporary Redirect**: The requested resource resides temporarily under a different URI.
  - **308 Permanent Redirect**: The request and all future requests should be repeated using another URI.
- Client Errors (4xx)
  - **400 Bad Request**: The server could not understand the request due to invalid syntax.
  - **401 Unauthorized**: The client must authenticate itself to get the requested response.
  - **403 Forbidden**: The client does not have access rights to the content.
  - **404 Not Found**: The server can not find the requested resource.
  - **405 Method Not Allowed**: The request method is known by the server but has been disabled and cannot be used.
  - **406 Not Acceptable**: The server cannot produce a response matching the list of acceptable values.
  - **408 Request Timeout**: The server timed out waiting for the request.
  - **409 Conflict**: The request could not be completed due to a conflict with the current state of the target resource.
  - **410 Gone**: The requested resource is no longer available and will not be available again.
  - **411 Length Required**: The server refuses to accept the request without a defined Content-Length.
  - **412 Precondition Failed**: The client has indicated preconditions that the server does not meet.
  - **413 Payload Too Large**: The request entity is larger than limits defined by the server.
  - **414 URI Too Long**: The URI requested by the client is longer than the server is willing to interpret.
  - **415 Unsupported Media Type**: The media format of the requested data is not supported by the server.
  - **429 Too Many Requests**: The user has sent too many requests in a given amount of time.
- Server Errors (5xx)
  - **500 Internal Server Error**: The server has encountered a situation it doesn't know how to handle.
  - **501 Not Implemented**: The request method is not supported by the server and cannot be handled.
  - **502 Bad Gateway**: The server, while acting as a gateway or proxy, received an invalid response.
  - **503 Service Unavailable**: The server is not ready to handle the request.
  - **504 Gateway Timeout**: The server is acting as a gateway and cannot get a response in time.
  - **505 HTTP Version Not Supported**: The HTTP version used in the request is not supported by the server.
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