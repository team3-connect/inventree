const { Sequelize } = require("sequelize");
const { sequelize } = require("../db");
const { FunkoPop } = require("../models/FunkoPop");


module.exports = {
  db: sequelize,
  FunkoPop,
};
