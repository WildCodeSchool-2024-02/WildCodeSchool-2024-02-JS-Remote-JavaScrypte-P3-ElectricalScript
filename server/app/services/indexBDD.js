const csv = require("csv-parser");
const fs = require("fs");
const path = require("path");

const results = [];

const filePath = path.join(__dirname, "..", "..", "uploads", "bornes-irve.csv");

fs.createReadStream(filePath)
  .pipe(csv({ separator: ";" }))
  .on("data", (data) => {
    const modifiedData = { ...data };

    delete modifiedData.n_amenageur;
    delete modifiedData.n_operateur;
    delete modifiedData.id_station;
    delete modifiedData.code_insee;
    delete modifiedData.id_pdc;
    delete modifiedData.acces_recharge;
    delete modifiedData.date_maj;
    delete modifiedData.source;
    delete modifiedData.region;
    delete modifiedData.departement;

    const renameData = {
      brand: data.n_enseigne,
      name: data.n_station,
      adress: data.ad_station,
      longitude: data.xlongitude,
      latitude: data.ylatitude,
      points_number: data.nbre_pdc,
      power: data.puiss_max,
      socket_type: data.type_prise,
      accessibility: data.accessibilite,
      observations: data.observations,
      position: data.geo_point_borne,
      postal_code: data.code_insee_commune,
    };

    results.push(renameData);
  })
  .on("end", () => {
    console.info(results);
  });
