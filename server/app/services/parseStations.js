const csv = require("csv-parser");
const fs = require("fs");
const path = require("path");

const parseStations = () => {
  const results = [];
  const filePath = path.join(
    __dirname,
    "..",
    "..",
    "uploads",
    "bornes-irve.csv"
  );

  return new Promise((resolve, reject) => {
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
        // inserer les resultats dans un fichier
        const jsonFilePath = path.join(
          __dirname,
          "..",
          "..",
          "database",
          "data",
          "stationsinf.json"
        );
        fs.writeFile(jsonFilePath, JSON.stringify(results, null, 2), (err) => {
          if (err) {
            reject(err);
          } else {
            resolve("Le fichier JSON des stations a été créé avec succès.");
          }
        });
      })
      .on("error", (error) => reject(error));
  });
};

module.exports = parseStations;
