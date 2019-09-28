// Includes file-system.
var fs = require('fs');
// Includes path.
var path = require('path');
// Includes sequelize.
var Sequelize = require('sequelize');

const sequelize = new Sequelize(
  "blog_db",
  "root",
  "root",
  {
    host: 'localhost',
    dialect: 'mysql',
  }
);

db = {
  sequelize,
  models: {},
};

// Model directory.
const dir = path.join(__dirname, './models');

// Import the models located in the directory.
fs.readdirSync(dir).forEach(file => {
  const modelDir = path.join(dir, file);
  const model = sequelize.import(modelDir);

  db.models[model.name] = model;
})

Object.keys(db.models).forEach(key => {
  const model = db.models[key];
  if (model.associate && typeof model.associate === "function") {
    db.models[key].associate(db.models);
  }
});

module.exports = db;
