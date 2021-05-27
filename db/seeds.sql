INSERT INTO department (name)
VALUES
('Managment'),
('Human Resources'),
('RND'),
('Engineering'),
('Programing');

INSERT INTO roles (title, salary, department_id)
VALUES
('Manager', 6530.20, 1),
('Resources', 4690.99, 2),
('Resercher', 4200.56, 3),
('Developer', 3600.93, 3),
('Engineer', 4450.89, 4),
('Programer', 3894.65, 5);

INSERT INTO manager (first_name, last_name, roles_id, department_id)
VALUES
('Teller', 'Wetzel', 1, 1),
('Big', 'Budda', 1, 2),
('David', 'Schmummer', 1, 3),
('Jennifer', 'Aniston', 1, 4),
('Hubba', 'Bubble', 1, 5);

INSERT INTO employee (first_name, last_name, roles_id, manager_id)
VALUES
('Frankie', 'Smith', 2, 1),
('Laura', 'Mercer', 2, 1),
('Francis', 'Penn', 3, 1),
('Maisy', 'Poker', 4, 1),
('Bruce', 'Wyane', 5, 1),
('Theresa', 'Finn', 6, 1);