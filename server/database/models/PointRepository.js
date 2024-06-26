const AbstractRepository = require("./AbstractRepository");

class PointRepository extends AbstractRepository {
  constructor() {
    super({ table: "point" });
  }

  async create(point) {
    const { reservation, stationId } = point;
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (reservation, station_id ) VALUES (?, ?)`,
      [reservation, stationId]
    );
    return result.insertId;
  }

  async readAll() {
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} AS p JOIN station AS s ON p.station_id = s.station_id`
    );
    return rows;
  }

  async readOneById(id) {
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} AS p
      JOIN station AS s ON p.station_id = s.station_id
      WHERE p.point_id = ?
    `,
      [id]
    );
    return rows[0];
  }

  async update(id, point) {
    const { reservation, stationId } = point;
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET reservation = ?, station_id = ? WHERE point_id = ?`,
      [reservation, stationId, id]
    );
    return result.affectedRows > 0;
  }

  async destroy(id) {
    const [result] = await this.database.query(
      `DELETE FROM ${this.table} WHERE point_id = ?`,
      [id]
    );
    return result.affectedRows > 0;
  }
}
module.exports = PointRepository;
