CREATE TABLE role (
    role_id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    role VARCHAR(80)
);

CREATE TABLE prise (
    prise_id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
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
    prise_id INT UNSIGNED NOT NULL,
    FOREIGN KEY (prise_id) REFERENCES prise (prise_id)
);

CREATE TABLE borne(
    borne_id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
    puiss_max FLOAT,
    reservation VARCHAR(80),
    observations VARCHAR(255),
    station_id INT UNSIGNED NOT NULL,
    FOREIGN KEY (station_id) REFERENCES station (station_id),
    prise_id INT UNSIGNED NOT NULL,
    FOREIGN KEY (prise_id) REFERENCES prise (prise_id)
);

CREATE TABLE voiture (
    voiture_id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
    marque VARCHAR(80),
    modele VARCHAR(80),
    image VARCHAR(255),
    prise_id INT UNSIGNED NOT NULL,
    FOREIGN KEY (prise_id) REFERENCES prise (prise_id)
);

CREATE TABLE utilisateurs (
    utilisateur_id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
    prenom VARCHAR(255) NOT NULL,
    nom VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    mdp VARCHAR(80) NOT NULL,
    role_id INT UNSIGNED NOT NULL,
    FOREIGN KEY (role_id) REFERENCES role (role_id),
    voiture_id INT UNSIGNED NOT NULL,
    FOREIGN KEY (voiture_id) REFERENCES voiture (voiture_id)
);

CREATE TABLE reservation (
    reservation_id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
    statut VARCHAR(80),
    prix FLOAT,
    date_debut DATE,
    date_fin DATE,
    borne_id INT UNSIGNED NOT NULL,
    FOREIGN KEY (borne_id) REFERENCES borne (borne_id),
    utilisateur_id INT UNSIGNED NOT NULL,
    FOREIGN KEY (utilisateur_id) REFERENCES utilisateurs (utilisateur_id)
);