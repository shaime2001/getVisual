const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  // Define fields User here
  username: { type: String,
              required: [true, 'Please add a username'] },

  email: { type: String,
           unique: true, required: [true, 'Please add an email'] },

  password: { type: String,
              required: [true, 'Please enter a password'] },

  accType: { type: String,
             enum: ['user'], required: true },

  skills: [{ type: String }],
},
{
  timestamps: true
});

const User = mongoose.model('User', userSchema);
module.exports = User;
