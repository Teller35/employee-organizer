const db = require('./db/connection');
const inquirer = require('inquirer');
const cTable = require('console.table');

async function getStarted () {

    const { tableDb } = await inquirer.prompt({
        type: 'list',
        name: 'tableDb',
        message: 'What would you like to do?',
        choices: ['View Departments', 'View Roles', 'View Employees', 'Add Department', 'Add Role', 'Add Employee', 'Update Employee Role', 'Exit']
    });
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
        case 'Add Role':
            addRole();
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
    console.log('=====================');
    console.table(department[0]);
    console.log('=====================');
    getStarted();
};

async function viewRoles () {
    const roles = await db.promise().query(`SELECT * FROM roles`);
    console.log('=======================================');
    console.table(roles[0]);
    console.log('=======================================');
    getStarted();
};

async function viewEmployees () {
    const employee = await db.promise().query(`SELECT employees.id, employees.first_name, employees.last_name, roles.title AS title,departments.name AS department, roles.salary, 
    CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employees 
    LEFT JOIN employees manager ON manager.id = employees.manager_id 
    LEFT JOIN roles ON employees.role_id = roles.id 
    LEFT JOIN departments ON departments.id = roles.department_id`);
    console.log('=================================================================================');
    console.table(employee[0]);
    console.log('=================================================================================');
    getStarted();
};

async function addDepartment () {
    const addDepartment = await inquirer.prompt({
        type: 'input',
        name: 'newDepartment',
        message: 'What department would you like to add?'
    });
    let response = addDepartment.newDepartment;
    await db.promise().query(`INSERT INTO departments(name) VALUEs (?)`, response);
    console.log('==============================================');
    console.log(`The new ${response} department was added!`);
    console.log('==============================================');
    getStarted();
};

async function addRole () {
    const department = await db.promise().query(`SELECT * FROM departments`);
    
    const departmentList = department[0].map((list) => {
        return {
            name: list.name,
            value: list.id
        }
    });

    const newRole = await inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the name of new role?'
        },
        {
            type: 'input',
            name: 'salary',
            message: 'What salary would you like to set for this role?'
        },
        {
            type: 'list',
            name: 'department',
            message: 'Role needs a department to report to!',
            choices: departmentList
        }
    ]);

    let response = [newRole.title, newRole.salary, newRole.department];
    await db.promise().query(`INSERT INTO roles(title, salary, department_id) VALUES (?,?,?)`, response);
    console.log('==============================================');
    console.log(`The new role of ${newRole.title} has been added!`);
    console.log('==============================================');
    getStarted();
}

async function addEmployee () {
    const role = await db.promise().query(`SELECT * FROM roles`);
    const manager = await db.promise().query(`SELECT * FROM employees`);

    const roleList = role[0].map((role) => {
        return {
            name: role.title,
            value: role.id
        }
    });

    const managerList = manager[0].map((manager) => {
        return {
            name: `${manager.first_name} ${manager.last_name}`,
            value: manager.id
        }
    });

    const newEmployee = await inquirer.prompt([
        {
            type: 'input',
            name: 'firstName',
            message: 'What is the new employees first name?'
        },
        {
            type: 'input',
            name: 'lastName',
            message: 'What is the new employees last name?'
        },
        {
            type: 'list',
            name: 'manager',
            message: 'Who would you like to assign as manager?',
            choices: managerList
        },
        {
            type: 'list',
            name: 'role',
            message: 'What role would you like to assign to employee?',
            choices: roleList
        }
    ]);
    const response = [newEmployee.firstName, newEmployee.lastName, newEmployee.role, newEmployee.manager];
    await db.promise().query(`INSERT INTO employees(first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)`, response);
    console.log('=====================================================');
    console.log(`New employee ${newEmployee.firstName} has been added to the team!`);
    console.log('=====================================================');
    getStarted();
};

async function updateEmployee () {
    const employeeList = await db.promise().query(`SELECT * FROM employees`);
    const roleList = await db.promise().query(`SELECT * FROM roles`);

    const employeeUpdate = employeeList[0].map((employee) => {
        return {
            name: `${employee.first_name} ${employee.last_name}`,
            value: employee.id
        }
    });
    
    const roles = roleList[0].map((role) => {
        return {
            name: role.title,
            value: role.id
        }
    });

    const { employeeId, roleId } = await inquirer.prompt([
        {
            type: 'list',
            name: 'employeeId',
            message: 'Who are we going to update today?',
            choices: employeeUpdate
        },
        {
            type: 'list',
            name: 'roleId',
            message: 'What is their role going to be?',
            choices: roles
        },

    ]);

    await db.promise().query(`UPDATE employees SET role_id = ? WHERE id = ?`, [roleId, employeeId]);
    console.log('===================');
    console.log('Updated employee!');
    console.log('===================');
    getStarted();
}

getStarted();