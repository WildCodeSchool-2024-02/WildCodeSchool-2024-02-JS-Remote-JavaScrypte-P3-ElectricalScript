// const AbstractSeeder = require("./AbstractSeeder");
// const cars = require("../data/cars.json");

// const CarSeeder = require("./CarSeeder");

// class UserSeeder extends AbstractSeeder {
//   constructor() {
//     super({ table: "users", truncate: true, dependencies: [CarSeeder] });
//   }

//   run() {
//     cars.forEach(() => {
//       this.insert({
//         car_type_id: this.getRef(`car_type_id`).insertId,
//       });
//     });
//   }
// }

// module.exports = UserSeeder;
