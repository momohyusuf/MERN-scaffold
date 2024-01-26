const mongoose = require('mongoose');

// A library to for hashing our password
const bcrypt = require('bcrypt');

// A basic user schema please modify it to your requirement
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      index: true,
    },

    password: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

// Before saving the user info, we hash the password.
userSchema.pre('save', async function () {
  if (!this.isModified('password')) return;

  // Adjust the salt round as needed
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(this.password, salt);

  // Then assign the password to hash value
  this.password = hash;
});

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;
