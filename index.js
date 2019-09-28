// Api.

// Includes express.
var express = require('express');
// Includes path.
var path = require('path');
// Includes body-parser.
var bodyParser = require('body-parser');

// Includes db.
var db = require('./api/database/db');
// Includes controller.
var controller = require('./api/controllers/controller');

// Continue when the database is synchronized.
db.sequelize.sync().done(() => {
  // Init express.
  const app = express();
  const port = process.env.PORT || 3000;

  // Server static files.
  app.use("/", express.static(path.join(__dirname, "client")));

  app.get("/posts", controller.getAllPosts);

  // Start the express server.
  app.listen(port);
  console.log("Listening on port " + port);
});
