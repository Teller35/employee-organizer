INSERT INTO department (name)
VALUES
('Human Resources'),
('RND'),
('Engineering'),
('Programing');

INSERT INTO roles (title, salary, department_id)
VALUES
('Manager', 6530.20, 1),
('Resources', 4690.99, 1),
('Resercher', 4200.56, 2),
('Developer', 3600.93, 2),
('Engineer', 4450.89, 3),
('Programer', 3894.65, 4);

INSERT INTO employee (first_name, last_name, roles_id, manager_id)
VALUES
('Teller', 'Wetzel', 1, NULL),
('Francis', 'Carey', 1, NULL),
('Frankie', 'Smith', 2, 1),
('Laura', 'Mercer', 2, 1),
('Francis', 'Penn', 3, 1),
('Maisy', 'Poker', 4, 2),
('Bruce', 'Wyane', 5, 2),
('Theresa', 'Finn', 6, 2);