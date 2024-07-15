CREATE TABLE role (
    role_id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    role VARCHAR(80) DEFAULT "user"
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

