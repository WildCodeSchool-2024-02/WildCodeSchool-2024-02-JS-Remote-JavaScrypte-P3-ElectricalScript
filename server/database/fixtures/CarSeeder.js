const cars = require("../data/cars.json"); 

const AbstractSeeder = require("./AbstractSeeder");

class CarSeeder extends AbstractSeeder {
  constructor() {
    super({ table: "car_type", truncate: true });
  }

  run() {
    cars.forEach((car, index) => {
      this.insert({
        brand: car.brand,
        model: car.model,
        image: car.image,
        socket_type: car.socket_type, 
        refName: `car_${index + 1}`,
      });
    });
  }
}

module.exports = CarSeeder;