// initiate express app and set up the server
const express = require("express");
const cors = require("cors");
const app = express();
const port = 8080;

// set up the public directory to serve static files
app.use(express.static("public"));

// set up the middleware to parse the request body
app.use(express.json());

// set up the middleware to enable CORS
app.use(cors());

// set up the middleware to log the request
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
});

app.get("/", (req, res) => {
  // send index.html file as response to the client
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/staking", (req, res) => {
  // send staking.html file as response to the client
  res.sendFile(__dirname + "/views/staking.html");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
