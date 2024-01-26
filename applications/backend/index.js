// A package for accessing env variables
require('dotenv').config();

// A package to help handle express async errors
require('express-async-errors');

// Third parties libraries
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
// *******************

const { connectToDb } = require('./config/db');
const errorHandler = require('./middleware/errorHandler');
const authRoutes = require('./routes/authRoutes');
const routeNotFound = require('./middleware/noRouteFound');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(morgan('tiny'));

app.use('/api/v1/auth', authRoutes);

app.use(routeNotFound);
app.use(errorHandler);

const start = async () => {
  try {
    await connectToDb();
    app.listen(port, () => console.log(`listening on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
