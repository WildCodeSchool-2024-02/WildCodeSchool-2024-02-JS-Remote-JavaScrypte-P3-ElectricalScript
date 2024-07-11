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
  
  async addCarManually(data) {
    try {
      const insertedCar = await this.insert({
        brand: data.brand,
        model: data.model,
        image: data.image,
        socket_type: data.socket_type,
        refName: `manual_car_${Date.now()}`,
      });

      console.info("Car added manually:", insertedCar);
      return insertedCar;
    } catch (error) {
      console.error("Error adding car manually:", error);
      throw error;
    }
  }
}

module.exports = CarSeeder;