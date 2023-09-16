CREATE TABLE Users (
	id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
	email varchar(255),
	name varchar(255),
	city varchar(255)
);

INSERT INTO Users
VALUES (1, 'eric@gmail.com', 'hoidanit', 'hanoi');

INSERT INTO Users
VALUES (2, 'duongduong7103@gmail.com', 'duongduong', 'saigon');

select * from Users;