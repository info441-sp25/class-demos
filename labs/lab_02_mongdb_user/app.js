require('dotenv').config();
const mongoose = require('mongoose');

async function addUser() {
  const uri = process.env.MONGODB_URI;
  console.log('dotenv', uri);
  await mongoose.connect(uri);

  console.log('Connected to mongodb');

  const userSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String,
    password: String,
  });

  const userModel = mongoose.model('user', userSchema);
  console.log('pass userSchema');

  const User = new userModel({
    firstname: 'David',
    lastname: 'Pham',
    email: 'dpham722@uw.edu',
    password: 'test123',
  });
  console.log('user info before save', User);
  await User.save();
  console.log('user info has been saved');
}

addUser();
