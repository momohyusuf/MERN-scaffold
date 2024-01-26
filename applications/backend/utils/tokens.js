const jwt = require('jsonwebtoken');

// generate jason web token
const generateJwtToken = async (userInfo) => {
  const token = await jwt.sign(userInfo, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRE,
  });

  return token;
};

module.exports = {
  generateJwtToken,
};
