const { Sequelize } = require("sequelize");
const { sequelize } = require("../db");

const { FunkoPop } = require("./FunkoPop");

module.exports = {
  db: sequelize,
  FunkoPop,
};
