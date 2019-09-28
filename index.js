// Api.

// Includes express.
var express = require('express');
// Includes path
var path = require('path');

// Includes controller.
var controller = require('./api/controllers/controller');

// Init express.
const app = express();
const port = process.env.PORT || 3000;

// Server static files.
app.use("/", express.static(path.join(__dirname, "client")));

app.get("/api/posts", controller.getAllPosts);

// Start the express server.
app.listen(port);
console.log("Listening on port " + port);
