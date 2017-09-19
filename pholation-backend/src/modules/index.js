const Sequelize = require('sequelize');
const fs        = require('fs');
const path      = require('path');
const basename  = path.basename(module.filename);
const db        = {};

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD, {
      host: process.env.DB_URL,
      dialect: 'mysql',
      pool: {
        max: 5,
        min: 0,
        idle: 10000
      },
    });


// moduels에 있는 module들을 연결 시킨다
fs
.readdirSync(__dirname)
.filter(function(file) {
  return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
})
.forEach(function(file) {
  const model = sequelize['import'](path.join(__dirname, file));
  db[model.name] = model;
});

Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;