const db = require('./db/connection');
const inquirer = require('inquirer');
// const cTable = require('console.table');

async function getStarted () {
    let { tableDb } = await inquirer.prompt({
        type: 'list',
        name: 'tableDb',
        message: 'What would you like to do?',
        choices: ['View Departments', 'View Roles', 'View Employees', 'Add Department', 'Add Employee', 'Update Employee Role', 'Exit']
    })
    switch (tableDb) {
        case 'View Departments':
            viewDepartments();
            break;
        case 'View Roles':
            viewRoles();
            break;
        case 'View Employees':
            viewEmployees();
            break;
        case 'Add Department':
            addDepartment();
            break;
        case 'Add Employee':
            addEmployee();
            break;
        case 'Update Employee Role':
            updateEmployee();
            break;
        default:
            process.exit();
    }
};

async function viewDepartments () {
    const department = await db.promise().query(`SELECT * FROM department`);
    console.table(department[0]);
    getStarted();
};

async function viewRoles () {
    const roles = await db.promise().query(`SELECT * FROM role`);
    console.table(roles[0]);
    getStarted();
};

async function viewEmployees () {
    const employee = await db.promise().query(`SELECT * FROM employee`);
    console.table(employee[0]);
    getStarted();
};

getStarted();