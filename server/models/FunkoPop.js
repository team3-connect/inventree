const { Sequelize } = require("sequelize");
const { sequelize } = require("../db");

const FunkoPop = sequelize.define("funkopops", {
  name: Sequelize.STRING,
  description: Sequelize.STRING,
  price: Sequelize.NUMBER,
  category: Sequelize.STRING,
  image: Sequelize.STRING,
});

module.exports = {
  db: sequelize,
  FunkoPop}
