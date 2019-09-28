// Define the actions to be performed in the queries made by the client.

// Includes dbservices.
var dbServices = require('../services/dbservices');

// Respond with the posts stored in the database.
function getAllPosts(req, res) {
  res.send(dbServices.getAllPosts());
}

// Export the functions.
module.exports = {
  getAllPosts
}
