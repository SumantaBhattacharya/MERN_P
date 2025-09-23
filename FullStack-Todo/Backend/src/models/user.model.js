import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

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
      select: false, // when user give passward it will set as true, By default, whenever you query a User, Mongoose will exclude the password field from the result. by default, don't include password in queries
      minlength: [8, "Password must be at least 8 characters long"],
    },
    refreshToken: {
      type: String,
      select: false, // Don't include in queries by default
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  // this is basically pointing to the current user
  const user = this;

  // if the pass is not modified then no hashing
  if (!user.isModified("password")) return next();

  user.password = await bcrypt.hash(user.password, 10); // salt

  next();
});

// methods is a predefined function to create a custom method
userSchema.methods.comparepassword = async function (enteredPassword) {
  // bcrypt internally checks the entered password with the stored hashed password
  const user = this; // Mongoose automatically makes this method available on all document instances of that model.
  // console.log("Entered Password:", enteredPassword);
  // console.log("Stored Hashed Password:", user.password);
  return await bcrypt.compare(enteredPassword, user.password);
};

// when user signup or loggin a token should be generated with of which we will authenticate the user to access to create/read/update/delete the todo owned by the user
userSchema.methods.generateAccessToken = function () {
  // it is basically used for validating the client site. only if the user has token then he is a authenticated user
  return jwt.sign(
    {
      _id: this._id, // Mongoose documents have this._id.
      email: this.email,
      username: this.username,
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
    }
  );
};

userSchema.methods.generateRefreshToken = function (){

  return jwt.sign({
    // A refresh token’s only job is to get a new access token when the old one expires. With _id, your server can look up the user in the database when issuing a new access token.
    _id: this._id,
   
  },
  process.env.REFRESH_TOKEN_SECRET,
  { expiresIn: process.env.REFRESH_TOKEN_EXPIRY }// In JWT, expiresIn is a configuration option you pass to jwt.sign()
)

}

const User = mongoose.model("User", userSchema);
export default User;

/*
bcrypt internally:
Generates a random salt (genSalt(10)).
Uses that salt + your password to produce the final hash.
Stores the salt inside the hash string itself.

pre("save") hook: runs before any save() or create() call on a User.

*/
