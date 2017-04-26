var Sequelize = require('sequelize');

//postgres://jyrnheaglohdce:f0bc8ca435047a1314b79e6379faa6851c0039de35175842daa59fb6db6f4c87@ec2-54-163-254-76.compute-1.amazonaws.com:5432/d98mh062mviuhb
//postgres://localhost:5432/food
var db = new Sequelize('postgres://jyrnheaglohdce:f0bc8ca435047a1314b79e6379faa6851c0039de35175842daa59fb6db6f4c87@ec2-54-163-254-76.compute-1.amazonaws.com:5432/d98mh062mviuhb', {
  logging: false
});

module.exports = db;