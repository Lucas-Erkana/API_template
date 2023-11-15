const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true, // Ensure that each username is unique
  },
  email: {
    type: String,
    required: true,
    unique: true, // Ensure that each email is unique
  },
  password: {
    type: String,
    required: true,
  },
  // Add more fields as needed for your user model
});

module.exports = mongoose.model('User', userSchema);
