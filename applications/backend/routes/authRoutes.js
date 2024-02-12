// Require the Express module
const express = require('express');

// Require the necessary controllers for user authentication
const { signUpUser, signIn } = require('../controllers/authControllers');

// Create an Express router
const router = express.Router();

// Define a route for user sign up
router.post(
  '/sign-up',
  // Call the signUpUser controller function to handle the sign-up request
  signUpUser
);

// Define a route for user sign in
router.post(
  '/sign-in',
  // Call the signIn controller function to handle the sign-in request
  signIn
);

// Export the router for use in other parts of the application
module.exports = router;

// In this code, we first require the Express module and the necessary controllers for user authentication. Then, we create an Express router and define routes for user sign up and sign in. Each route is configured to call the corresponding controller function when a request is received. Finally, we export the router to make it available for use in other parts of the application. Here's an explanation of the code:

// 1. **Require the Necessary Modules:**
//    - We use `require()` to import the Express module and the `signUpUser` and `signIn` controller functions from the `authControllers` module.

// 2. **Create an Express Router:**
//    - We call `express.Router()` to create an Express router. This router will handle all the routes related to user authentication.

// 3. **Define the Sign-Up Route:**
//    - We define a POST route for user sign up using `router.post('/sign-up', signUpUser)`. When a client sends a POST request to the '/sign-up' endpoint, the `signUpUser` controller function is called to handle the request.

// 4. **Define the Sign-In Route:**
//    - Similarly, we define a POST route for user sign in using `router.post('/sign-in', signIn)`. When a client sends a POST request to the '/sign-in' endpoint, the `signIn` controller function is called to handle the request.

// 5. **Export the Router:**
//    - We export the router using `module.exports = router;` so that it can be imported and used in other parts of the application.

// 6. **Controller Functions:**
//    - The `signUpUser` and `signIn` controller functions are defined in the `authControllers` module. These functions are responsible for handling the actual sign-up and sign-in logic, such as validating user input, interacting with the database, and sending appropriate responses.

// When this code is integrated into an Express application, it will allow users to sign up for and sign in to the application through dedicated endpoints. The controller functions will be responsible for implementing the specific logic for user authentication.
