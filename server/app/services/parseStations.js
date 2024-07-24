const csv = require("csv-parser");
const fs = require("fs");
const path = require("path");
const mysql = require("mysql2/promise");
require("dotenv").config();

const parseStations = () => {
  const results = [];
  const filePath = path.join(
    __dirname,
    "..",
    "..",
    "uploads",
    "bornes-irve.csv"
  );

  // Database connection configuration
  const dbConfig = {
    host: "localhost",
    user: "pierre",
    password: "Syusuke1989@",
    database: "geocode",
  };

  return new Promise((resolve, reject) => {
    let connection;

    fs.createReadStream(filePath)
      .pipe(csv({ separator: ";" }))
      .on("data", (data) => {
        const renameData = {
          name: data.n_station,
          brand: data.n_enseigne,
          address: data.ad_station,
          latitude: parseFloat(data.ylatitude),
          longitude: parseFloat(data.xlongitude),
          position: parseFloat(data.geo_point_borne),
          socket_type: data.type_prise,
          power: parseFloat(data.puiss_max),
          accessibility: data.accessibilite,
          postal_code: data.code_insee_commune,
        };

        results.push(renameData);
      })
      .on("end", () => {
        mysql
          .createConnection(dbConfig)
          .then((conn) => {
            connection = conn;
            const insertQuery = `
              INSERT INTO station (name, brand, address, latitude, longitude, position, socket_type, power, accessibility, postal_code)
              VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            `;

            const insertPromises = results.map((station) =>
              connection.execute(insertQuery, [
                station.name,
                station.brand,
                station.address,
                station.latitude,
                station.longitude,
                station.position,
                station.socket_type,
                station.power,
                station.accessibility,
                station.postal_code,
              ])
            );

            return Promise.all(insertPromises);
          })
          .then(() => connection.end())
          .then(() =>
            resolve(
              "Les données des stations ont été insérées avec succès dans la base de données."
            )
          )
          .catch((error) => {
            if (connection) connection.end();
            reject(error);
          });
      })
      .on("error", (error) => reject(error));
  });
};

parseStations()
  .then((message) => console.info(message))
  .catch((error) => console.error(error));

module.exports = parseStations;
