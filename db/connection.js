const mysql = require('mysql2');
cd

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