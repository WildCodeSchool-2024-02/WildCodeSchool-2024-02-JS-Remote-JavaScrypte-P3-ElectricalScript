CREATE TABLE role (
    role_id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    role VARCHAR(80)
);

CREATE TABLE socket (
    socket_id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
    type_prise VARCHAR(80) NOT NULL,
    puiss_max INT NOT NULL
);

CREATE TABLE station (
    station_id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
    n_station VARCHAR(255) NOT NULL,
    n_enseigne VARCHAR(255) NOT NULL,
    ad_station VARCHAR(255) NOT NULL,
    ylatitude FLOAT,
    xlongitude FLOAT,
    geo_point_borne FLOAT,
    nbre_pdc INT,
    accessibilite VARCHAR(80),
    code_insee_commune INT,
    socket_id INT UNSIGNED NOT NULL,
    FOREIGN KEY (socket_id) REFERENCES socket (socket_id)
);

CREATE TABLE point(
    point_id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
    puiss_max FLOAT,
    reservation VARCHAR(80),
    observations VARCHAR(255),
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
    socket_id INT UNSIGNED NOT NULL,
    FOREIGN KEY (socket_id) REFERENCES socket (socket_id)
);

CREATE TABLE users (
    user_id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
    firstname VARCHAR(255) NOT NULL,
    lastname VARCHAR(255) NOT NULL,
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
    price FLOAT,
    start_date DATE,
    end_date DATE,
    point_id INT UNSIGNED NOT NULL,
    FOREIGN KEY (point_id) REFERENCES point(point_id),
    user_id INT UNSIGNED NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users (user_id)
);