// Require the 'dotenv' package which loads environment variables from a `.env` file into `process.env`.
require('dotenv').config();

// Require the 'express-async-errors' package which enables Express to handle errors thrown from asynchronous handlers.
require('express-async-errors');

// Require the 'express' package which is a Node.js web application framework.
const express = require('express');

// Require the 'cors' package which is a Node.js package for providing a Connect/Express middleware that enables CORS with various options.
const cors = require('cors');

// Require the 'morgan' package which is a Node.js HTTP request logger middleware for Node.js.
const morgan = require('morgan');

// Require the 'connectToDb' function from the 'config/db.js' file which connects to the database.
const { connectToDb } = require('./config/db');

// Require the 'errorHandler' middleware function from the 'middleware/errorHandler.js' file which handles errors.
const errorHandler = require('./middleware/errorHandler');

// Require the 'authRoutes' router from the 'routes/authRoutes.js' file which contains the authentication routes.
const authRoutes = require('./routes/authRoutes');

// Require the 'routeNotFound' middleware function from the 'middleware/noRouteFound.js' file which handles routes that are not found.
const routeNotFound = require('./middleware/noRouteFound');

// Create an instance of the Express application.
const app = express();

// Set the port number. If the environment variable `PORT` is set, use that value, otherwise use 3000.
const port = process.env.PORT || 3000;

// Use CORS middleware to enable cross-origin requests.
app.use(cors());

// Use Express's built-in JSON parsing middleware.
app.use(express.json());

// Use Morgan middleware for logging HTTP requests.
app.use(morgan('tiny'));

// Use the authentication routes.
app.use('/api/v1/auth', authRoutes);

// Use the route not found middleware.
app.use(routeNotFound);

// Use the error handler middleware.
app.use(errorHandler);

// Define the 'start' function which starts the server.
const start = async () => {
  try {
    // Connect to the database.
    await connectToDb();

    // Start listening on the specified port.
    app.listen(port, () => {
      console.log(`Listening on port ${port}`);
    });
  } catch (error) {
    // Handle any errors that occur while starting the server.
    console.log(error);
  }
};

// Call the 'start' function to start the server.
start();
