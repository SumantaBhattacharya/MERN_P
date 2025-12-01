import express from 'express'
import cors from 'cors';

import path from 'path';
import { fileURLToPath } from 'url';

import { errorHandler } from './utils/ApiError.js';

import chatRoutes from './routes/chat-routes.js';

const app = express()
app.use(cors()); // for cross origin resource sharing

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve files from project root (so assets/ works)
const PROJECT_ROOT = path.join(__dirname, '..');

// DEBUG:
// console.log("server.js dirname:", __dirname);
// console.log("Project root:", PROJECT_ROOT);

// Serve static files from project root
app.use(express.static(PROJECT_ROOT));

// app.use(express.static(path.join(__dirname, '../')));

app.get('/', (req, res) => {
  return res.sendFile(path.join(__dirname, '../index.html'));
});

app.use('/api/chat', chatRoutes);

// error handler should be last
app.use(errorHandler);

const port = process.env.PORT || 3001;
app.listen(port, () => {
  // middleware
  console.log(`Server running at http://localhost:${port}`);
});
