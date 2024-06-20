CREATE TABLE role (
    role_id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    role VARCHAR(80)
);

CREATE TABLE socket (
    socket_id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
    socket_type VARCHAR(80) NOT NULL,
    power_charge INT NOT NULL
);

CREATE TABLE station (
    station_id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
    name VARCHAR(80) NOT NULL,
    brand VARCHAR(80) NOT NULL,
    adress VARCHAR(155) NOT NULL,
    latitude FLOAT NOT NULL,
    longitude FLOAT NOT NULL,
    point_number INT,
    position FLOAT NOT NULL,
    accessibility VARCHAR(80),
    postal_code VARCHAR(25) NOT NULL,
    socket_id INT UNSIGNED NOT NULL,
    FOREIGN KEY (socket_id) REFERENCES socket (socket_id)
);

CREATE TABLE point(
    point_id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
    power FLOAT,
    reservation VARCHAR(80),
    observations VARCHAR(255),
    station_id INT UNSIGNED NOT NULL,
    FOREIGN KEY (station_id) REFERENCES station (station_id),
    socket_id INT UNSIGNED NOT NULL,
    FOREIGN KEY (socket_id) REFERENCES socket (socket_id)
);
CREATE TABLE car_type (
    car_type_id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
    brand VARCHAR(80) NOT NULL,
    model VARCHAR(80) NOT NULL,
    image VARCHAR(255),
    socket_id INT UNSIGNED NOT NULL,
    FOREIGN KEY (socket_id) REFERENCES socket (socket_id)
);

CREATE TABLE users (
    user_id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(80) NOT NULL,
    role_id INT UNSIGNED NOT NULL,
    FOREIGN KEY (role_id) REFERENCES role (role_id),
    car_type_id INT UNSIGNED NOT NULL,
    FOREIGN KEY (car_type_id) REFERENCES car_type (car_type_id)
);
CREATE TABLE reservation (
    reservation_id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
    status VARCHAR(80),
    price FLOAT NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    point_id INT UNSIGNED NOT NULL,
    FOREIGN KEY (point_id) REFERENCES point(point_id),
    user_id INT UNSIGNED NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users (user_id)
);
INSERT INTO role (role) VALUES ('admin');
INSERT INTO socket (socket_type, power_charge) VALUES ('typeC', 4);
INSERT INTO car_type (brand, model, image,  socket_id) VALUES ('peugeot', 'rs6', 'balblalbalba', 1);
INSERT INTO users (first_name, last_name, email, password, role_id, car_type_id) VALUES ('john', 'Doe', 'john@doe.com', 'password', 1, 1);
INSERT INTO station (
    name, brand, adress, latitude, longitude, point_number, position, accessibility,  postal_code, socket_id
) VALUES
('Station 1', 'Brand A', '123 Main St', 40.712776, -74.005974, 5, 94000, 'yes', '73100', 1);
INSERT INTO point ( power, reservation, observations, station_id, socket_id) VALUES (45, "dimanche", "mescouilles", 1, 1 );