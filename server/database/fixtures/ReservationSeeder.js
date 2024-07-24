const AbstractSeeder = require("./AbstractSeeder");

class ReservationSeeder extends AbstractSeeder {
  constructor() {
    super({ table: "reservation", truncate: true });
  }

  run() {
    for (let i = 0; i < 10; i += 1) {
      const userRef = this.getRef(`user_${i}`);

      if (!userRef) {
        throw new Error(`Users with refName user_${i} not found`);
      }

      const fakeReservation = {
        status: this.faker.helpers.arrayElement([
          "confirmé",
          "en attente",
          "Annulé",
        ]),
        price: this.faker.finance.amount(10, 500, 2),
        start_at: this.faker.date.soon(5),
        end_at: this.faker.date.soon(10),
        user_id: userRef.insertId,
        station_id: this.faker.datatype.number({ min: 1, max: 100 }),
      };

      this.insert(fakeReservation);
    }
  }
}

module.exports = ReservationSeeder;
