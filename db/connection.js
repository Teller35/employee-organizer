const mysql = require('mysql2');
require('dotenv').config({ path: './.env' });

// Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: process.env.password,
        database: 'employees'
    }
)

module.exports = db;