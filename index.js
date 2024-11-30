const express = require("express");
const app = express();
const dontenv = require("dotenv");
dontenv.config();
const port = process.env.PORT;

app.get("/", (rer, res) => {
  res.send("hello  bhavesh");
});

app.get("/login", (req, res) => {
  res.send("<h1>Welcome to the Login page</h1>");
});

app.get("/register", (req, res) => {
  res.send("<h2>Welcome to the Register page</h2>");
});

app.listen(port, (req, res) => {
  console.log(`server running on port http://localhost:${port}`);
});
