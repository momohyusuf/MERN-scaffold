const CustomError = require('../utils/customError');
const UserModel = require('../model/userModel');
const HTTPSTATUSCODE = require('../utils/httpStatusCodes');
const { generateJwtToken } = require('../utils/tokens');
const validator = require('validator').default;
const bcrypt = require('bcrypt');

//  Registering a user
//  Public route
const signUpUser = async (req, res) => {
  const { name, email, password } = req.body;

  if (
    !name.trim() ||
    !validator.isEmail(email) ||
    !validator.isStrongPassword(password)
  ) {
    throw new CustomError(
      HTTPSTATUSCODE.BAD_REQUEST,
      'Please provide the required values'
    );
  }

  // Check if user email already has a registered account
  const checkUser = await UserModel.findOne({ email });
  if (checkUser) {
    throw new CustomError(400, `An account with ${email} already exist`);
  }

  // Create a new user with email and password
  const newUser = await UserModel.create({
    name,
    email,
    password,
  });

  // //  generate jwt token
  const accessToken = await generateJwtToken({
    userId: newUser._id,
    name: newUser.name,
    email: newUser.email,
  });

  res
    .status(HTTPSTATUSCODE.CREATED)
    .json({ name: newUser.name, email: newUser.email, accessToken });
};

//  Sign in a user
//  Public route
const signIn = async (req, res) => {
  const { email, password } = req.body;

  if (!validator.isEmail(email) || !validator.isStrongPassword(password)) {
    throw new CustomError(
      HTTPSTATUSCODE.BAD_REQUEST,
      'Please provide the required values'
    );
  }

  // check if user account exists
  const user = await UserModel.findOne({ email });

  if (!user) {
    throw new CustomError(
      HTTPSTATUSCODE.BAD_REQUEST,
      'Please provide the required values'
    );
  }

  // check password if password is correct
  const passwordCorrect = await bcrypt.compare(password, user.password);
  if (!passwordCorrect) {
    throw new CustomError(
      HTTPSTATUSCODE.BAD_REQUEST,
      'Password or email is incorrect'
    );
  }

  // create an access token
  const accessToken = await generateJwtToken({
    userId: newUser._id,
    name: newUser.name,
    email: newUser.email,
  });
  const userInfo = {
    name: user.name,
    userId: user._id,
  };
  res.status(200).json({ ...userInfo, accessToken });
};

module.exports = {
  signUpUser,
  signIn,
};
