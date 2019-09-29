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

  app.use(bodyParser.json());

  // Server static files.
  app.use("/", express.static(path.join(__dirname, "client")));

  // Get all posts.
  app.get("/posts", controller.getAllPosts);
  // Create a blog post.
  app.post("/admin/posts/create", controller.setPost);

  // Start the express server.
  app.listen(port);
  console.log("Listening on port " + port);
});
