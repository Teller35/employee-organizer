DROP TABLE IF EXISTS department;
DROP TABLE IF EXISTS roles;
DROP TABLE IF EXISTS employee;
DROP TABLE IF EXISTS manager;



CREATE TABLE department (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL
);

CREATE TABLE roles (
    id INT AUTO_INCREMENT  PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL(6,2) NOT NULL,
    department_id INT
);

CREATE TABLE manager (
    id INT AUTO_INCREMENT  PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    roles_id INT,
    department_id INT
);

CREATE TABLE employee (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    roles_id INT,
    manager_id INT,
    FOREIGN KEY (manager_id) REFERENCES manager(id)
);