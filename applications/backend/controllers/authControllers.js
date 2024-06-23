const CustomError = require("../utils/customError"); // Import the custom error class
const UserModel = require("../model/userModel"); // Import the user model
const HTTPSTATUSCODE = require("../utils/httpStatusCodes"); // Import the HTTP status codes
const { generateJwtToken } = require("../utils/tokens"); // Import the function to generate JWT tokens
const validator = require("validator").default; // Import the validator library
const bcrypt = require("bcrypt"); // Import the bcrypt library for password hashing

const signUpUser = async (req, res) => {
  // Extract the name, email, and password from the request body
  const { name, email, password } = req.body;

  if (!name.trim()) {
    throw new CustomError(
      HTTPSTATUSCODE.BAD_REQUEST,
      "Please provide your name"
    );
  }

  // Validate the input
  if (
    !validator.isEmail(email) // Check if the email is valid
  ) {
    // If any of the checks fail, throw a custom error
    throw new CustomError(
      HTTPSTATUSCODE.BAD_REQUEST,
      "Please provide a valid email address"
    );
  }

  if (!validator.isStrongPassword(password)) {
    throw new CustomError(
      HTTPSTATUSCODE.BAD_REQUEST,
      "Password must be at least 8 characters long and contain a number, an uppercase letter, and a special character"
    );
  }

  // Check if a user with the provided email already exists
  const user = await UserModel.findOne({ email });
  if (user) {
    // If a user with the same email exists, throw a custom error
    throw new CustomError(400, `An account with ${email} already exist`);
  }

  // Create a new user with the provided data
  const newUser = await UserModel.create({
    name,
    email,
    password,
  });

  // Generate a JWT access token for the user
  const accessToken = await generateJwtToken({
    userId: newUser._id, // Use the user's ID as the subject of the token
    name: newUser.name, // Include the user's name in the token payload
    email: newUser.email, // Include the user's email in the token payload
  });

  // Send the response with the user's information and the access token
  res
    .status(HTTPSTATUSCODE.CREATED) // Set the status code to 201 (Created)
    .json({ name: newUser.name, email: newUser.email, accessToken }); // Send the user's name, email, and the access token in the response body
};

const signIn = async (req, res) => {
  // Extract the email and password from the request body
  const { email, password } = req.body;

  // Validate the input
  if (!validator.isEmail(email) || !validator.isStrongPassword(password)) {
    // If any of the checks fail, throw a custom error
    throw new CustomError(
      HTTPSTATUSCODE.BAD_REQUEST,
      "Please provide a valid email address and password"
    );
  }

  // Find the user with the provided email
  const user = await UserModel.findOne({ email });

  // If the user does not exist, throw a custom error
  if (!user) {
    throw new CustomError(
      HTTPSTATUSCODE.BAD_REQUEST,

      `No account with ${email}`
    );
  }

  // Compare the provided password with the user's hashed password
  const passwordCorrect = await bcrypt.compare(password, user.password);

  // If the password is incorrect, throw a custom error
  if (!passwordCorrect) {
    throw new CustomError(
      HTTPSTATUSCODE.BAD_REQUEST,
      "Password or email is incorrect"
    );
  }

  // Generate a JWT access token for the user
  const accessToken = await generateJwtToken({
    userId: user._id, // Use the user's ID as the subject of the token
    name: user.name, // Include the user's name in the token payload
    email: user.email, // Include the user's email in the token payload
  });

  // Create a user info object to send in the response
  const userInfo = {
    name: user.name,
    userId: user._id,
  };

  // Send the response with the user's information and the access token
  res.status(200).json({ ...userInfo, accessToken }); // Send the user's name, user ID, and the access token in the response body
};

module.exports = {
  signUpUser,
  signIn,
};
