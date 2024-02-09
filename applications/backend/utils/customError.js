/**
 * CustomError class extends the built-in Error class to create custom error types that can be used throughout the application.
 * It provides a consistent way to handle and communicate errors, making it easier to debug and maintain the codebase.
 */
class CustomError extends Error {
  /**
   * Constructor method takes two parameters: statusCode and message.
   * statusCode is a numeric HTTP status code that indicates the type of error that occurred.
   * message is a user-friendly error message that provides more details about the error.
   */
  constructor(statusCode, message) {
    /**
     * Call the super constructor of the Error class to initialize the error object with the provided message.
     */
    super();

    /**
     * Assign the provided statusCode to the this.statusCode property of the error object.
     * This allows us to access the status code associated with the error.
     */
    this.statusCode = statusCode;

    /**
     * Assign the provided message to the this.message property of the error object.
     * This allows us to access the user-friendly error message associated with the error.
     */
    this.message = message;
  }
}

/**
 * Export the CustomError class as a module, making it available for import and use in other parts of the application.
 */
module.exports = CustomError;
