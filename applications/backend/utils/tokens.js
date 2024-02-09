// Import the 'jsonwebtoken' library.
const jwt = require('jsonwebtoken');

/**
 * Asynchronously generates a JSON Web Token (JWT) using the provided user information.
 *
 * @param {Object} userInfo The user information to include in the JWT.
 * @returns {string} The generated JWT.
 */
const generateJwtToken = async (userInfo) => {
  // Sign the JWT using the user information, a secret key, and an expiration time.
  // The secret key and expiration time are stored in environment variables.
  const token = await jwt.sign(userInfo, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRE,
  });

  // Return the generated JWT.
  return token;
};

// Export the 'generateJwtToken' function.
module.exports = {
  generateJwtToken,
};
