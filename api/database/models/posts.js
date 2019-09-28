// Posts model

// Includes sequelize.
var sequelize = require('sequelize');

// Export the model.
module.exports = db => {
  // Define the structure of the model.
  const posts = db.define('posts', {
    title: {
      type: sequelize.STRING,
      allowNull: false
    },
    description: {
      type: sequelize.STRING,
      allowNull: false
    }
  }, {

  });
  return posts;
};
