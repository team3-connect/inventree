const {Sequelize} = require('sequelize')
const {sequelize} = require('../db')

const Sauce = sequelize.define("sauces", {
  name: Sequelize.STRING,
  
  image: Sequelize.STRING,
});
const Funkos = sequelize.define("funkos", {
  name: Sequelize.STRING,
  price: Sequelize.STRING,
  description: Sequelize.STRING,
  category: Sequelize.STRING,
  image: Sequelize.STRING,
});

module.exports = {
  db: sequelize,
  Sauce,
  Funkos
};
