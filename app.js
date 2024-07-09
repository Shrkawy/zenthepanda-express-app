// initiate express app and set up the server
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const app = express();
const port = 8080;

// set up the public directory to serve static files
app.use(express.static("public"));

// set up the middleware to parse the request body
app.use(express.json());

// set up the middleware to enable CORS
app.use(cors());

// set up the middleware to log the request
app.use(morgan("dev"));

app.get("/", (req, res) => {
  // send index.html file as response to the client
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/staking", (req, res) => {
  // send staking.html file as response to the client
  res.sendFile(__dirname + "/views/staking.html");
});

app.get("/privacy-policy", (req, res) => {
  // send privacy-policy.html file as response to the client
  res.sendFile(__dirname + "/views/privacy-policy.pdf");
});

app.get("/cookie-policy", (req, res) => {
  // send cookie-policy.html file as response to the client
  res.sendFile(__dirname + "/views/cookie-policy.pdf");
});

app.get("/terms-of-services", (req, res) => {
  // send terms-of-services.html file as response to the client
  res.sendFile(__dirname + "/views/terms-of-services.pdf");
});

// not found error handler
app.use((req, res, next) => {
  // redirect to the home page
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});