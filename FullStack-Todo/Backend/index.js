import express from "express";// module 

import connectDB from "./src/db/Mongodb.js";
import dotenv from "dotenv";

import todoRoutes from './src/routes/todo.route.js';
import userRoutes from "./src/routes/user.route.js"
import cookieParser from "cookie-parser";

// Load environment variables
dotenv.config()

const app = express();

connectDB();

/*
const path = require("path")

app.set("view engine", "ejs")
app.set("views", path.join(__dirname,"views"))

app.use(express.static(path.join(__dirname,'public')));
app.use(express.static("dist")); // serve static files from the public directory
*/


app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cookieParser()); // This enables cookie functionality globally

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

// routes
app.use('/todo', todoRoutes);
app.use('/user', userRoutes);

const port = process.env.port || 3000;

app.listen(port, () => {
  // middleware
  console.log(`Server is running at http://localhost:${port}`);
});

