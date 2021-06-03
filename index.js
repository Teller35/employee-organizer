const db = require('./db/connection');
const inquirer = require('inquirer');
const cTable = require('console.table');

async function getStarted () {
    const { tableDb } = await inquirer.prompt({
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
    const department = await db.promise().query(`SELECT * FROM departments`);
    console.table(department[0]);
    getStarted();
};

async function viewRoles () {
    const roles = await db.promise().query(`SELECT * FROM roles`);
    console.table(roles[0]);
    getStarted();
};

async function viewEmployees () {
    const employee = await db.promise().query(`SELECT employees.id, employees.first_name, employees.last_name, roles.title AS title,departments.name AS department, roles.salary, 
    CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employees 
    LEFT JOIN employees manager ON manager.id = employees.manager_id 
    LEFT JOIN roles ON employees.role_id = roles.id 
    LEFT JOIN departments ON departments.id = roles.department_id`);
    console.table(employee[0]);
    getStarted();
};

async function addDepartment () {
    const addDepartment = await inquirer.prompt({
        type: 'input',
        name: 'newDepartment',
        message: 'What department would you like to add?'
    })
    let response = addDepartment.newDepartment;
    await db.promise().query(`INSERT INTO departments(name) VALUEs (?)`, response);
    console.log(`The new ${response} department was added!`);
    getStarted();
};



getStarted();