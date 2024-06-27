const AbstractRepository = require("./AbstractRepository");

class ChargingPointRepository extends AbstractRepository {
  constructor() {
    super({ table: "charging_point" });
  }

  async create(chargingPoint) {
    const { reservation, stationId } = chargingPoint;
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (reservation, station_id ) VALUES (?, ?)`,
      [reservation, stationId]
    );
    return result.insertId;
  }

  async readAll() {
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} AS cp JOIN station AS s ON cp.station_id = s.station_id`
    );
    return rows;
  }

  async readOneById(id) {
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} AS cp
      JOIN station AS s ON cp.station_id = s.station_id
      WHERE cp.charging_point_id = ?
    `,
      [id]
    );
    return rows[0];
  }

  async update(id, chargingPoint) {
    const { reservation, stationId } = chargingPoint;
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET reservation = ?, station_id = ? WHERE charging_point_id = ?`,
      [reservation, stationId, id]
    );
    return result.affectedRows > 0;
  }

  async destroy(id) {
    const [result] = await this.database.query(
      `DELETE FROM ${this.table} WHERE charging_point_id = ?`,
      [id]
    );
    return result.affectedRows > 0;
  }
}
module.exports = ChargingPointRepository;
