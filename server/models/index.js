const {Sequelize} = require('sequelize')
const {sequelize} = require('../db')

// IMPORT
const { Funkopop } = require("./Funkopop");

// ASSOCIATIONS

module.exports = {
  db: sequelize,
  Funkopop,
};
