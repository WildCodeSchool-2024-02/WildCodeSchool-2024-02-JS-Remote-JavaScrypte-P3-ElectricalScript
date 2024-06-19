const csv = require("csv-parser");
const fs = require("node:fs");

const results = [];

fs.createReadStream("./bornes-irve.csv")
  .pipe(csv({ separator: ";" }))
  .on("data", (data) => results.push(data))
  .on("end", () => console.log(results));
