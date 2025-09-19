import express from "express"; // const express = require('express'); // common js
// module js
const app = express();

//app.use(express.static("dist")); // serve static files from the public directory

// const path = require("path")

/*
app.set("view engine", "ejs")
app.set("views", path.join(__dirname,"views"))

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.static(path.join(__dirname,'public')));
*/

app.get("/", (req, res) => {
  res.send("Server is ready");
});

// get a liost of five jokes
app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "Atoms Can't Be Trusted",
      content:
        "Why don't scientists trust atoms? Because they make up everything!",
    },
    {
      id: 2,
      title: "Haunted Elevator",
      content:
        "Why don't you ever see ghosts in elevators? Because they lift your spirits!",
    },
    {
      id: 3,
      title: "Time Flies",
      content: "I asked my dog what's two minus two. He said nothing.",
    },
    {
      id: 4,
      title: "Cereal Killer",
      content:
        "What do you call a person who murders breakfast? A cereal killer.",
    },
    {
      id: 5,
      title: "Math Book Problems",
      content: "Why was the math book sad? Because it had too many problems.",
    },
    {
      id: 6,
      title: "Computer's Cold",
      content: "Why was the computer cold? It left its Windows open!",
    },
  ];
  // res.json(jokes);
  res.send(jokes);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  // middleware
  console.log(`Server running at http://localhost:${port}`);
});

// https://jsonformatter.org/