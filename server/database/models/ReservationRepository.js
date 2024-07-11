const AbstractRepository = require("./AbstractRepository");

class ReservationRepository extends AbstractRepository {
  constructor() {
    super({ table: "reservation" });
  }

  async create(reservation) {
    const { status, price, date, startTime, endTime, userId } = reservation;
    const [result] = await this.database.query(
      `INSERT INTO ${this.table}(status, price, date, start_time, end_time, user_id) VALUES (?, ?, ?, ?, ?, ?)`,
      [status, price, date, startTime, endTime, userId]
    );
    return result.insertId;
  }

  async readAll() {
    const [rows] = await this.database.query(
      `SELECT u.user_id, u.first_name, u.last_name, r.status, r.price, r.date, r.start_time, r.end_time FROM ${this.table} AS r JOIN users AS u ON r.user_id = u.user_id `
    );
    return rows;
  }

  async readOneById(id) {
    const [rows] = await this.database.query(
      `SELECT u.user_id, u.first_name, u.last_name, r.status, r.price, r.date, r.start_time, r.end_time FROM ${this.table} AS r JOIN users AS u ON r.user_id = u.user_id WHERE r.reservation_id = ? `,
      [id]
    );
    return rows[0];
  }

  async update(id, reservation) {
    const { status, price, date, startTime, endTime, userId } = reservation;
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET status = ?, price = ?, date = ?, start_time = ?, end_time = ?, user_id = ? WHERE reservation_id = ?`,
      [status, price, date, startTime, endTime, userId, id]
    );
    return result.affectedRows > 0;
  }

  async destroy(id) {
    const [result] = await this.database.query(
      `DELETE FROM ${this.table} WHERE reservation_id
 = ?`,
      [id]
    );
    return result.affectedRows > 0;
  }
}

module.exports = ReservationRepository;
