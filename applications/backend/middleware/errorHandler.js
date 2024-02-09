 
// Require the HTTP status codes from the utils folder
const HTTPSTATUSCODE = require('../utils/httpStatusCodes');

// Define an error handler function to handle errors in the application
const errorHandler = (err, req, res, next) => {

  // Define a default error object with the status code and message
  const defaultError = {
    statusCode: err.statusCode || HTTPSTATUSCODE.INTERNAL_SERVER_ERROR,
    message: err.message || 'Something went wrong internal server error',
  };

  // Check if the error is a validation error
  if (err.type === 'ValidationError') {
    // Set the status code to bad request
    res.status(HTTPSTATUSCODE.BAD_REQUEST);

    // Send the error message in JSON format
    res.json({ error: err.message });

    // Return from the function to stop further execution
    return;
  }

  // Check if the error code is 11000, which indicates a duplicate key error
  if (err.code === 11000) {
    // Set the status code to bad request
    res.status(HTTPSTATUSCODE.BAD_REQUEST);

    // Send the error message in JSON format, indicating that an account with the same email already exists
    res.json({
      error: `An account with ${err.keyValue.email} already exist`,
    });

    // Return from the function to stop further execution
    return;
  }

  // Send the default error message in JSON format
  res.status(defaultError.statusCode).json({ message: defaultError.message });
};

// Export the error handler function so that it can be used in other parts of the application
module.exports = errorHandler;

 