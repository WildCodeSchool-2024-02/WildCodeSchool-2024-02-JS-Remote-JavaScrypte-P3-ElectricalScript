CREATE TABLE role (
    role_id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    role VARCHAR(80)
);

CREATE TABLE socket (
    socket_id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
    name_type_socket VARCHAR(80) NOT NULL,
    power_charge INT NOT NULL
);

CREATE TABLE station (
    station_id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
    name VARCHAR(80) NOT NULL,
    brand VARCHAR(80) NOT NULL,
    adress VARCHAR(155) NOT NULL,
    latitude FLOAT,
    longitude FLOAT,
    point_number INT,
    status VARCHAR(80),
    accessibility VARCHAR(80),
    city VARCHAR(80),
    poste_code INT,
    socket_id INT UNSIGNED NOT NULL,
    FOREIGN KEY (socket_id) REFERENCES socket (socket_id)
);

CREATE TABLE point(
    point_id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
    socket_type VARCHAR(80),
    power FLOAT,
    reservation VARCHAR(80),
    badge BOOLEAN,
    station_id INT UNSIGNED NOT NULL,
    FOREIGN KEY (station_id) REFERENCES station (station_id),
    socket_id INT UNSIGNED NOT NULL,
    FOREIGN KEY (socket_id) REFERENCES socket (socket_id)
);

CREATE TABLE car_type (
    car_type_id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
    brand VARCHAR(80),
    model VARCHAR(80),
    image VARCHAR(255),
    socket_type VARCHAR(80),
    socket_id INT UNSIGNED NOT NULL,
    FOREIGN KEY (socket_id) REFERENCES socket (socket_id)
);

CREATE TABLE user (
    user_id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
    firstname VARCHAR(255) NOT NULL,
    lastname VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(80) NOT NULL,
    city VARCHAR(155) NOT NULL,
    postal_code INT,
    role_id INT UNSIGNED NOT NULL,
    FOREIGN KEY (role_id) REFERENCES role (role_id),
    car_type_id INT UNSIGNED NOT NULL,
    FOREIGN KEY (car_type_id) REFERENCES car_type (car_type_id)
);

CREATE TABLE reservation (
    reservation_id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
    status VARCHAR(80),
    price FLOAT,
    start_date DATE,
    end_date DATE,
    point_id INT UNSIGNED NOT NULL,
    FOREIGN KEY (point_id) REFERENCES point(point_id),
    user_id INT UNSIGNED NOT NULL,
    FOREIGN KEY (user_id) REFERENCES user (user_id)
);