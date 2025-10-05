import mongoose from "mongoose";

import { DB_NAME } from "../constants.js";

// const DB_NAME = "fullstack_todo_db";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URL}/${DB_NAME}`
    );
    console.log(
      `\nMongoDB connected! DB HOST:${connectionInstance.connection.host}`
    );
    console.log(`Connected to DB: ${mongoose.connection.name}`); 
  } catch (err) {
    console.log("MONGODB connection  failed", err);
    process.exit(1);
  }
};

export default connectDB;
