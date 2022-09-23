const { Sequelize } = require('sequelize');
const config = require('../config/config.json')

const DB_NAME = process.env.DB_NAME ?? config.db.database
const DB_USERNAME = process.env.DB_USERNAME ?? config.db.username
const DB_PASSWORD = process.env.DB_PASSWORD ?? config.db.password
const DB_HOST = process.env.DB_HOST ?? config.db.host
const DB_PORT = process.env.DB_PORT ?? config.db.port
const DB_DIALECT = process.env.DB_DIALECT ?? config.db.dialect

const instance = new Sequelize({
  database: DB_NAME,
  host: DB_HOST,
  port: DB_PORT,
  username: DB_USERNAME,
  password: DB_PASSWORD,
  dialect: DB_DIALECT,
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