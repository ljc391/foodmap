var Sequelize = require('sequelize');
var db = require('./_db');

var Restaurant = db.define('restaurant', {
  name: Sequelize.STRING,
  lat: Sequelize.DOUBLE,
  lng: Sequelize.DOUBLE,
  address: Sequelize.STRING,
  description: Sequelize.STRING,
  img: Sequelize.STRING,
  tags: Sequelize.ARRAY(Sequelize.TEXT),
  rating: Sequelize.INTEGER,
  price: Sequelize.INTEGER
});

module.exports = Restaurant;


