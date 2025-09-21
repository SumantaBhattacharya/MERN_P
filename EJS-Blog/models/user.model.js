// const { createHmac} = require ('node:crypto')
// import {createHmac} from 'node:crypto'
import {createHmac, randomBytes} from 'crypto'

import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true, // trim: true only removes spaces from the start and end of the string. It does NOT touch spaces in the middle.
      minlength: [3, "Username must be at least 3 characters long"],
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please enter a valid email"],
    },
    password: {
      type: String,
      required: true,
      select: false, // when user give passward it will set as true
      minlength: [8, "Password must be at least 8 characters long"],
    },
  },
  { timestamps: true }
);

userSchema.pre("save", function() {
  // this is basically pointing to the current user
  const user = this;

  if(!user.isModified('password')) return;

  // https://nodejs.org/api/crypto.html#cryptocreatehmacalgorithm-key-options

  const salt = randomBytes(16).toString(); // created a random string of 16
  const hashedPaaword =  createHmac('sha256', salt).update(user.password).digest('hex');

  // this refer to user here we dont have a user schema salt so, 
  this.salt = salt;
  this.password = hashedPaaword;

  next();

})

const User = mongoose.model("User", userSchema);
export default User; 

/*
this refers to the current document being saved (i.e., the User instance).
In an arrow function, this is lexically scoped, meaning it doesn’t bind its own this.
Instead, it uses the this of the parent scope.
So this would NOT refer to the document
*/