const cTable = require('console.table');
const inquirer = require('inquirer');
const db = require('./db/connection');
require('dotenv').config();


db.connect(err => {
    if (err) throw err;
    console.log('Database connected');
})