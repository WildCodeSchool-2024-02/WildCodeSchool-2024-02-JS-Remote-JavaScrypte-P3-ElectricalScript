const AbstractRepository = require("./AbstractRepository");

class ReservationRepository extends AbstractRepository {
  constructor() {
    super({ table: "reservation" });
  }

  async create(reservation) {
    const { status, price, startDate, endDate, pointId, userId } = reservation;
    const [result] = await this.database.query(
      `INSERT INTO ${this.table}(status, price, start_date, end_date, point_id, user_id) VALUES (?, ?, ?, ?, ?, ?)`,
      [status, price, startDate, endDate, pointId, userId]
    );
    return result.insertId;
  }

  async readAll() {
    const [rows] = await this.database.query(`SELECT * FROM ${this.table}`);
    return rows;
  }

  async readOneById(id) {
    const [rows] = await this.database.query(
      ` SELECT * FROM ${this.table} WHERE reservation_id = ?`,
      [id]
    );
    return rows[0];
  }

  async update(id, reservation) {
    const { status, price, startDate, endDate, pointId, userId } = reservation;
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET  status = ?, price = ?, start_date = ?, end_date = ?, point_id = ?, user_id=? WHERE reservation_id=?`,
      [status, price, startDate, endDate, pointId, userId, id]
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
