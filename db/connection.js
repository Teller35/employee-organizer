const mysql = require('mysql2');
const util = require('util');
require('dotenv').config();

// Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: process.env.DB_USER,
        password: process.env.DB_PW,
        database: process.env.DB_NAME
    },
    );
    console.log("-------------------------------------------------------")
    console.log("|                                                     |")
    console.log("|  _______                 _                          |")
    console.log("| |   ____|_ __ ___  _ __ | | ___  _   _  ___  ___    |")
    console.log("| |   __| | `_ ` _ \| `_ \| |/ - \| | | |/ _ \/ _ \   |")
    console.log("| |  |____| | | | | | |_) | | ( ) | |_| |  __/  __/   |")
    console.log("| |_______|_| |_| |_| .__/|_|\___/ \__, |\___|\___|   |")
    console.log("|                   |_|            |___/              |")
    console.log("|                                                     |")
    console.log("|  __  __                                             |")
    console.log("| |  \/  | __ _ _ __  __ _  __ _  ___ _ __            |")
    console.log("| | |\/| |/ _` | '_ \ / _' |/ _' |/ _ \ '__|          |")
    console.log("| | |  | | ( | | | | | ( | | ( | |  __/ |             |")
    console.log("| |_|  |_|\__,_|_| |_|\__,_|\__, |\___|_|             |")
    console.log("|                           |___/                     |")
    console.log("|                                                     |")
    console.log("-------------------------------------------------------")

    db.connect(function(err){
        if (err) throw err;
    });

    db.connect = util.promisify(db.connect);

module.exports = db;