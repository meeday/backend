const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String, required:true
  },
  password: {
    type: String, required:true, minLength: 6
  },
  firstName: {
    type: String
  },
  lastName: {
    type: String
  }
});

module.exports = User = mongoose.model('user', userSchema);