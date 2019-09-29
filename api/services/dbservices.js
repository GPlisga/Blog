// Make interactions with the database.

// Includes db.
const db = require('../database/db');
const Posts = db.models.posts;

// Returns all posts stored in the database.
function getAllPosts() {
  return Posts.findAll({});
}

// Create new post.
function setPost(body) {
  return Posts.create({title: body.title, description: body.description});
}

// Export the functions.
module.exports = {
  getAllPosts,
  setPost
}
