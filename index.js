var express = require('express');
var path = require('path');

// Used to simulate a database temporarily
const posts = [
  {
    id: 0,
    title: "Title post 1",
    description: "Description post 1",
  },
  {
    id: 1,
    title: "Title post 2",
    description: "Description post 2",
  },
  {
    id: 2,
    title: "Title post 3",
    description: "Description post 3",
  }
];

const app = express();
const port = process.env.PORT || 3000;

app.use("/", express.static(path.join(__dirname, "client")));

app.get("/api/posts", getAllPosts);

app.listen(port);
console.log("Listening on port " + port);

function getAllPosts(req, res) {
  res.send(posts);
}

module.exports = {
  getAllPosts
}
