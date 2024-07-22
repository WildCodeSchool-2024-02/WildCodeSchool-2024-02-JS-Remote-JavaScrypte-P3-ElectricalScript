-- SQLBook: Code
CREATE TABLE role (
    role_id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    role VARCHAR(80) DEFAULT "User"
);

CREATE TABLE station (
    station_id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
    name VARCHAR(255) NOT NULL,
    brand VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    latitude FLOAT ,
    longitude FLOAT ,
    position FLOAT,
    socket_type VARCHAR(255),
    power FLOAT,
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
    FOREIGN KEY (user_id) REFERENCES users (user_id)
);

-- -- Insérer des données dans la table role
-- INSERT INTO role (role) VALUES 
-- ('Admin'),
-- ('User'),
-- ('Manager'),
-- ('Guest'),
-- ('Operator');

-- -- Insérer des données dans la table station
-- INSERT INTO station (name, brand, address, latitude, longitude, position, socket_type, power, accessibility, postal_code) VALUES 
-- ('Station One', 'BrandA', '123 Main St', 37.7749, -122.4194, 1, 'Type1', 50.0, 'Public', '94103'),
-- ('Station Two', 'BrandB', '456 Elm St', 34.0522, -118.2437, 2, 'Type2', 60.0, 'Private', '90001'),
-- ('Station Three', 'BrandC', '789 Oak St', 40.7128, -74.0060, 3, 'Type3', 70.0, 'Public', '10001'),
-- ('Station Four', 'BrandD', '101 Pine St', 51.5074, -0.1278, 4, 'Type4', 80.0, 'Private', 'WC2N'),
-- ('Station Five', 'BrandE', '202 Cedar St', 48.8566, 2.3522, 5, 'Type5', 90.0, 'Public', '75001');

-- -- Insérer des données dans la table car_type
-- INSERT INTO car_type (brand, model, socket_type, image) VALUES 
-- ('Tesla', 'Model S', 'Type2', 'image1.jpg'),
-- ('Nissan', 'Leaf', 'Type1', 'image2.jpg'),
-- ('Chevrolet', 'Bolt', 'Type3', 'image3.jpg'),
-- ('BMW', 'i3', 'Type4', 'image4.jpg'),
-- ('Audi', 'e-tron', 'Type5', 'image5.jpg');

-- -- Insérer des données dans la table users
-- INSERT INTO users (first_name, last_name, email, password, role_id, car_type_id) VALUES 
-- ('John', 'Doe', 'john.doe@example.com', 'password123', 1, 1),
-- ('Jane', 'Smith', 'jane.smith@example.com', 'password123', 2, 2),
-- ('Alice', 'Johnson', 'alice.johnson@example.com', 'password123', 3, 3),
-- ('Bob', 'Brown', 'bob.brown@example.com', 'password123', 4, 4),
-- ('Charlie', 'Davis', 'charlie.davis@example.com', 'password123', 5, 5);

-- -- Insérer des données dans la table reservation
-- INSERT INTO reservation (status, price, start_at, end_at, user_id) VALUES 
-- ('Confirmed', 20.0, '2024-07-11 08:00:00', '2024-07-11 10:00:00', 1),
-- ('Pending', 15.0, '2024-07-12 09:00:00', '2024-07-12 11:00:00', 2),
-- ('Cancelled', 25.0, '2024-07-13 10:00:00', '2024-07-13 12:00:00', 3),
-- ('Completed', 30.0, '2024-07-14 11:00:00', '2024-07-14 13:00:00', 4),
-- ('Confirmed', 35.0, '2024-07-15 12:00:00', '2024-07-15 14:00:00', 5);
