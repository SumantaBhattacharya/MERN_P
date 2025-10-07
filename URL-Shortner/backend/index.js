import express from "express"; // asynchronous
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors({
  origin: "http://localhost:5173", // React app URL (Vite default)
  credentials: true, // This is crucial for cookies
}));

import connectDB from "./src/config/mongo.config.js";
import url_shortRoutes from "./src/routes/url_shortner.route.js"
import auth_Routes from "./src/routes/auth.route.js"

import { errorHandler } from "./src/utils/ApiError.js";

import dotenv from "dotenv";

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cookieParser()); 

// Load environment variables
dotenv.config("./.env");

connectDB();

// routes
app.use('/api', url_shortRoutes);
app.use("/api/auth", auth_Routes)

// error handler should be last
app.use(errorHandler);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  // middleware
  console.log(`Server running at http://localhost:${port}`);
});
