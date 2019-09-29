// Define the actions to be performed in the queries made by the client.

// Includes dbservices.
var dbServices = require('../services/dbservices');

// Respond with the posts stored in the database.
function getAllPosts(req, res) {
  dbServices.getAllPosts().then(posts => {
    res.send(posts);
  }).catch(error => {
    res.status(500).send(error);
  });
}

function setPost(req, res) {
  res.send(dbServices.setPost(req.body));
}

// Export the functions.
module.exports = {
  getAllPosts,
  setPost
}
