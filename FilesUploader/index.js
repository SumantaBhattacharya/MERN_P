import express from "express";

import path from "path";
import { fileURLToPath } from "url";

import multer from 'multer'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// it's a middlewere
// const upload = multer({ dest: 'uploads/' })// destination

const storage = multer.diskStorage({// callback
  destination: function (req, file, cb) {
    return cb(null, './uploads/profileImages')
  },
  filename: function (req, file, cb) {
    return cb(null, `${Date.now()}-${file.originalname}`)
  }
})

const upload = multer({ storage: storage })

// set view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// form data parse
app.use(express.urlencoded({extended: false}))
// app.use('/uploads', express.static('uploads'));

app.get("/", (req, res) => {
  res.render("homepage.ejs"); // expects views/index.ejs
});

app.post("/profile", upload.single('profileImage'), (req, res) => {
    console.log(req.body);
    console.log(req.file);

    return res.redirect("/");
})

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
