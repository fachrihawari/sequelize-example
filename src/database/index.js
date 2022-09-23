const { Sequelize } = require('sequelize');
const config = require('../config/config.json')

const DB_NAME = process.env.DB_NAME ?? config.db.database
const DB_USERNAME = process.env.DB_USERNAME ?? config.db.username
const DB_PASSWORD = process.env.DB_PASSWORD ?? config.db.password
const DB_HOST = process.env.DB_HOST ?? config.db.host
const DB_DIALECT = process.env.DB_DIALECT ?? config.db.dialect

const instance = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
  host: DB_HOST,
  dialect: DB_DIALECT
});

async function initialize() {
  try {
    await instance.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

const DB = {
  instance,
  initialize
}

module.exports = DB