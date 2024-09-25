const { Sequelize } = require('sequelize')
require('dotenv').config();

const db = new Sequelize(
    'postgres',
    process.env.dbLogin,
    process.env.dbPass,
    {
        host: process.env.dbHost,
        port: process.env.dbPost,
        dialect: 'postgres'
    }
)

module.exports = { db }