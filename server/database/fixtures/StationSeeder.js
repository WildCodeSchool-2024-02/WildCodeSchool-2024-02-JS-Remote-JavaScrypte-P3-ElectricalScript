const stations = require("../data/stationsinf.json");
const AbstractSeeder = require("./AbstractSeeder");

class StationSeeder extends AbstractSeeder {
  constructor() {
    super({ table: "station", truncate: true });
  }

  run() {
    stations.forEach((station, index) => {
      this.insert({
        name: station.name,
        brand: station.brand,
        address: station.address,
        latitude: station.latitude,
        longitude: station.longitude,
        position: station.position,
        socket_type: station.socket_type,
        power: station.power,
        accessibility: station.accessibility,
        postal_code: station.postal_code,
        refName: `station_${index + 1}`,
      });
    });
  }
}

module.exports = StationSeeder;
