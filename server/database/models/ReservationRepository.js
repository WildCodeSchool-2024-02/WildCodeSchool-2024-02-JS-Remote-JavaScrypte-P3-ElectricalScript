const AbstractRepository = require("./AbstractRepository");

class ReservationRepository extends AbstractRepository {
  constructor() {
    super({ table: "reservation" });
  }

  async create(reservation) {
    const { status, price, startDate, endDate, chargingPointId, userId } =
      reservation;
    const [result] = await this.database.query(
      `INSERT INTO ${this.table}(status, price, start_date, end_date, charging_point_id, user_id) VALUES (?, ?, ?, ?, ?, ?)`,
      [status, price, startDate, endDate, chargingPointId, userId]
    );
    return result.insertId;
  }

  async readAll() {
    const [rows] = await this.database.query(
      `SELECT u.user_id, u.first_name, u.last_name, r.status, r.price, r.start_date, r.end_date, charging_point_id  FROM ${this.table} AS r JOIN users AS u ON r.user_id = u.user_id `
    );
    return rows;
  }

  async readOneById(id) {
    const [rows] = await this.database.query(
      `SELECT u.user_id, u.first_name, u.last_name, r.status, r.price, r.start_date, r.end_date, charging_point_id  FROM ${this.table} AS r JOIN users AS u ON r.user_id = u.user_id WHERE r.reservation_id = ? `,
      [id]
    );
    return rows[0];
  }

  async update(id, reservation) {
    const { status, price, startDate, endDate, chargingPointId, userId } =
      reservation;
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET  status = ?, price = ?, start_date = ?, end_date = ?, charging_point_id = ?, user_id=? WHERE reservation_id=?`,
      [status, price, startDate, endDate, chargingPointId, userId, id]
    );
    return result.affectedRow > 0;
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
