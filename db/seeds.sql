INSERT INTO departments (name)
VALUES
('Management'),
('Human Resources'),
('RND'),
('Engineering'),
('Programing');

INSERT INTO roles (title, salary, department_id)
VALUES
('Manager', 6530.20, 1),
('Resources', 4690.99, 2),
('Resercher', 4200.56, 3),
('Engineer', 4450.89, 4),
('Programer', 3894.65, 5);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
('Teller', 'Wetzel', 1, NULL),
('Francis', 'Carey', 1, NULL),
('Frankie', 'Smith', 2, 1),
('Laura', 'Mercer', 3, 1),
('Francis', 'Penn', 3, 1),
('Maisy', 'Poker', 4, 2),
('Bruce', 'Wyane', 5, 2),
('Theresa', 'Finn', 5, 2);
