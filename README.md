# req-res-Handlers


## resFunc

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

```


## catchFunc

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


## setPublicDirFunc(app, express, dirPath)

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



### License

This function is provided for free use. Please feel free to adapt it for your project!

# README

## Error Handling

Both `resFunc` and `catchFunc` include type checks to ensure that the parameters are of the expected type. If an invalid type is provided, a `TypeError` will be thrown, helping to maintain the integrity of your application's responses.

## License

This package is licensed under the MIT License.

## Contributing

Contributions are welcome! If you have improvements, please open an issue or submit a pull request.

## Author

Akash Kawale
