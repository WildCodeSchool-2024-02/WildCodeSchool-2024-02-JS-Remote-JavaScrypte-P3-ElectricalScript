const fs = require("fs");
const csv = require("csv-parser");
const path = require("path");
const tables = require("../../database/tables");

const InsertFile = async (req, res, next) => {
  const filePath = path.join(
    __dirname,
    "..",
    "..",
    "public",
    "uploads",
    "bornes-irve.csv"
  );
  const results = [];

  fs.createReadStream(filePath)
    .pipe(csv({ separator: ";" }))
    .on("data", (data) => {
      const renameData = {
        name: data.n_station,
        brand: data.n_enseigne,
        address: data.ad_station,
        latitude: data.ylatitude,
        longitude: data.xlongitude,
        position: data.geo_point_borne,
        socket_type: data.type_prise,
        power: data.puiss_max,
        accessibility: data.accessibilite,
        postal_code: data.code_insee_commune,
      };

      results.push(renameData);
    })

    .on("end", async () => {
      try {
        await new Promise((resolve) => {
          results.forEach((station) => {
            tables.station.create(station);
          });
          resolve();
        });

        res
          .status(200)
          .send(
            "Les données des stations ont été insérées avec succès dans la base de données."
          );
      } catch (error) {
        next(error);
      }
    });
};

module.exports = InsertFile;
