const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:42123/');

const UserSchema = { name: String };
const UserModel = mongoose.model('User', UserSchema);
