// Include the Mongoose library
const mongoose = require('mongoose');

/**
 * Function to connect to the MongoDB database
 *
 * @return {Promise<void>} A promise that resolves when the connection is established
 */
const connectToDb = async () => {
  // Get the MongoDB connection string from the environment variables
  const mongoUri = process.env.MONGO_URI;

  // Connect to the database
  await mongoose.connect(mongoUri);

  // Log a message to indicate that the connection has been established
  console.log('connected to database');
};

// Export the connectToDb function so that it can be used in other modules
module.exports = { connectToDb };
