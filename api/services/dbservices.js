// Make interactions with the database.

// Includes db.
const db = require('../database/db');
const Posts = db.models.posts;

// Used to simulate a database temporarily.
/*const posts = [
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
];*/

// Returns all posts stored in the database.
function getAllPosts() {
  //return posts;
  return Posts.findAll({});
}

// Export the functions.
module.exports = {
  getAllPosts
}
