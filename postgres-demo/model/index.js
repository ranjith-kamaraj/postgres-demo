const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('postgres', 'postgres', 'postgres', {
  host: 'localhost',
  dialect: 'postgres'
});

const User = require("./User")(sequelize, DataTypes);
const Movie = require("./Movie")(sequelize, DataTypes);
const MovieCast = require("./MovieCast")(sequelize, DataTypes);

let db = {
  User,
  Movie,
  MovieCast
};

Object.keys(db).forEach(function (modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
