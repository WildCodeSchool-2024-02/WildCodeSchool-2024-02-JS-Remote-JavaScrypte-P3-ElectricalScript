const AbstractRepository = require("./AbstractRepository");

class ReservationRepository extends AbstractRepository {
  constructor() {
    super({ table: "reservation" });
  }

  async create(reservation) {
    const { status, price, startAt, endAt, userId, stationId } = reservation;
    const [result] = await this.database.query(
      `INSERT INTO ${this.table}(
        status,
        price,
        start_at,
        end_at,
        user_id,
        station_id
      ) 
      VALUES (?, ?, ?, ?, ?, ?)`,
      [status, price, startAt, endAt, userId, stationId]
    );
    return result.insertId;
  }

  async readAll() {
    const [rows] = await this.database.query(
      `SELECT
        u.user_id,
        u.first_name,
        u.last_name,
        s.station_id,
        r.status,
        r.price,
        r.start_at,
        r.end_at
      FROM ${this.table} AS r 
      JOIN users AS u ON r.user_id = u.user_id
      JOIN station AS s ON r.station_id = s.station_id`
    );
    return rows;
  }

  async readOneById(id) {
    const [rows] = await this.database.query(
      `SELECT
        r.reservation_id,
        u.user_id,
        r.station_id,
        u.first_name,
        u.last_name,
        r.status,
        r.price,
        r.start_at,
        r.end_at
      FROM ${this.table} AS r 
      JOIN users AS u ON r.user_id = u.user_id
      JOIN station AS s ON r.station_id = s.station_id
      WHERE r.reservation_id = ?`,
      [id]
    );
    return rows[0];
  }

  async update(id, reservation) {
    const { status, price, startAt, endAt, userId, stationId } = reservation;
    const [result] = await this.database.query(
      `UPDATE ${this.table}
      SET 
        status = ?,
        price = ?,
        start_at = ?,
        end_at = ?,
        user_id = ?,
        station_id = ?
      WHERE reservation_id = ?`,
      [status, price, startAt, endAt, userId, stationId, id]
    );
    return result.affectedRows > 0;
  }

  async destroy(id) {
    const [result] = await this.database.query(
      `DELETE FROM ${this.table} WHERE reservation_id = ?`,
      [id]
    );
    return result.affectedRows > 0;
  }

  async checkReservation(stationId, startAt, endAt) {
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table}
       WHERE station_id = ?
       AND (
         (start_at < ? AND end_at > ?)
         OR (start_at >= ? AND start_at < ?)
         OR (end_at > ? AND end_at <= ?)
       )`,
      [stationId, startAt, endAt, startAt, endAt, startAt, endAt]
    );

    return rows.length > 0;
  }
}

module.exports = ReservationRepository;
