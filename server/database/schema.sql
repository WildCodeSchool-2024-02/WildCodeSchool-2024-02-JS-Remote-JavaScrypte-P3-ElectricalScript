CREATE TABLE role (
    role_id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    role VARCHAR(80)
);

CREATE TABLE station (
    station_id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
    name VARCHAR(255) NOT NULL,
    brand VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    latitude VARCHAR(255) ,
    longitude VARCHAR(255) ,
    position VARCHAR(255),
    socket_type VARCHAR(255),
    power VARCHAR(255),
    accessibility VARCHAR(255),
    postal_code VARCHAR(25) NOT NULL
);

CREATE TABLE car_type (
    car_type_id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
    brand VARCHAR(255) NOT NULL,
    model VARCHAR(255) NOT NULL,
    socket_type VARCHAR(80),
    image VARCHAR(255)
);

CREATE TABLE users (
    user_id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL, 
    role_id INT UNSIGNED,
    FOREIGN KEY (role_id) REFERENCES role (role_id),
    car_type_id INT UNSIGNED,
    FOREIGN KEY (car_type_id) REFERENCES car_type (car_type_id)
);

CREATE TABLE reservation (
    reservation_id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
    status VARCHAR(80),
    price FLOAT NOT NULL,
    start_at DATETIME NOT NULL,
    end_at DATETIME NOT NULL,
    user_id INT UNSIGNED NOT NULL,
    station_id INT UNSIGNED NOT NULL,
    FOREIGN KEY (station_id) REFERENCES station (station_id),
    FOREIGN KEY (user_id) REFERENCES users (user_id)
);

INSERT INTO role (role) VALUES 
('Admin'),
('User');

CREATE TRIGGER before_users_insert
BEFORE INSERT ON users
FOR EACH ROW
BEGIN
    IF NEW.role_id IS NULL THEN
        SET NEW.role_id = (SELECT role_id FROM Role WHERE role = 'User');
    END IF;
END 
