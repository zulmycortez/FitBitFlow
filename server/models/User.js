const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  accessToken: String,
  fitbitId: String,
  profile: {},
  refreshToken: String
});

mongoose.model('users', userSchema);