CREATE TABLE role (
    role_id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    role VARCHAR(80)
);

CREATE TABLE station (
    station_id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
    name VARCHAR(255) NOT NULL,
    brand VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    latitude FLOAT ,
    longitude FLOAT ,
    point_number INT,
    position FLOAT,
    socket_type VARCHAR(255),
    power FLOAT,
    accessibility VARCHAR(255),
    postal_code VARCHAR(25) NOT NULL
);

CREATE TABLE charging_point (
    charging_point_id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
    reservation VARCHAR(80),
    station_id INT UNSIGNED NOT NULL,
    FOREIGN KEY (station_id) REFERENCES station (station_id)
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
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    charging_point_id INT UNSIGNED NOT NULL,
    FOREIGN KEY (charging_point_id) REFERENCES charging_point (charging_point_id),
    user_id INT UNSIGNED NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users (user_id)
);

INSERT INTO role (role_id, role) VALUES
(1, 'Admin'),
(2, 'User'),
(3, 'Manager'),
(4, 'Support'),
(5, 'Guest');

INSERT INTO station (name, brand, address, latitude, longitude, point_number, position, socket_type, power, accessibility, postal_code) VALUES
('Station A', 'Brand A', '123 Station St, City A', 40.7128, -74.006, 10, 1.0, 'Type A', 50.0, 'Accessible', '12345'),
('Station B', 'Brand B', '456 Charging Ave, Town B', 34.0522, -118.2437, 8, 0.8, 'Type B', 40.0, 'Limited', '67890'),
('Station C', 'Brand C', '789 Electric Blvd, Village C', 51.5074, -0.1278, 12, 0.9, 'Type C', 60.0, 'Accessible', '45678'),
('Station D', 'Brand D', '321 Plug Rd, Town D', 37.7749, -122.4194, 6, 0.7, 'Type D', 45.0, 'Limited', '23456'),
('Station E', 'Brand E', '555 Power St, City E', 45.4215, -75.6919, 15, 0.95, 'Type E', 55.0, 'Accessible', '78901');

INSERT INTO station (name, brand, address, latitude, longitude, point_number, position, socket_type, power, accessibility, postal_code) VALUES
('Station A', 'Brand A', '123 Station St, City A', 40.7128, -74.006, 10, 1.0, 'Type A', 50.0, 'Accessible', '12345'),
('Station B', 'Brand B', '456 Charging Ave, Town B', 34.0522, -118.2437, 8, 0.8, 'Type B', 40.0, 'Limited', '67890'),
('Station C', 'Brand C', '789 Electric Blvd, Village C', 51.5074, -0.1278, 12, 0.9, 'Type C', 60.0, 'Accessible', '45678'),
('Station D', 'Brand D', '321 Plug Rd, Town D', 37.7749, -122.4194, 6, 0.7, 'Type D', 45.0, 'Limited', '23456'),
('Station E', 'Brand E', '555 Power St, City E', 45.4215, -75.6919, 15, 0.95, 'Type E', 55.0, 'Accessible', '78901');

INSERT INTO charging_point (reservation, station_id) VALUES
(NULL, 1),
(NULL, 2),
(NULL, 3),
(NULL, 4),
(NULL, 5);

INSERT INTO car_type (brand, model, socket_type, image) VALUES
('Brand X', 'Model X1', 'Type A', 'x1.jpg'),
('Brand Y', 'Model Y1', 'Type B', 'y1.jpg'),
('Brand Z', 'Model Z1', 'Type C', 'z1.jpg'),
('Brand W', 'Model W1', 'Type D', 'w1.jpg'),
('Brand V', 'Model V1', 'Type E', 'v1.jpg');

INSERT INTO users (first_name, last_name, email, password, role_id, car_type_id) VALUES
('John', 'Doe', 'john.doe@example.com', 'password123', 2, 1),
('Jane', 'Smith', 'jane.smith@example.com', 'password456', 2, 2),
('Michael', 'Johnson', 'michael.johnson@example.com', 'password789', 3, 3),
('Emily', 'Brown', 'emily.brown@example.com', 'passwordABC', 4, 4),
('David', 'Wilson', 'david.wilson@example.com', 'passwordXYZ', 5, 5);

INSERT INTO reservation (status, price, start_date, end_date, charging_point_id, user_id) VALUES
('Active', 25.0, '2024-07-10', '2024-07-12', 1, 1),
('Pending', 30.0, '2024-07-11', '2024-07-13', 2, 2),
('Active', 35.0, '2024-07-12', '2024-07-14', 3, 3),
('Cancelled', 0.0, '2024-07-13', '2024-07-15', 4, 4),
('Active', 40.0, '2024-07-14', '2024-07-16', 5, 5);

