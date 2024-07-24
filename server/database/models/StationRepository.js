const AbstractRepository = require("./AbstractRepository");

class StationRepository extends AbstractRepository {
  constructor() {
    super({ table: "station" });
  }

  async create(station) {
    const {
      name,
      brand,
      address,
      latitude,
      longitude,
      position,
      socket_type: socketType,
      power,
      accessibility,
      postal_code: postalCode,
    } = station;
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (
      name,
      brand,
      address,
      latitude, 
      longitude, 
      position,
      socket_type,
      power,
      accessibility,
      postal_code
      )
      VALUES (?, ?, ?, ?, ? ,? ,?, ?, ?, ?)`,
      [
        name,
        brand,
        address,
        latitude,
        longitude,
        position,
        socketType,
        power,
        accessibility,
        postalCode,
      ]
    );
    return result.insertId;
  }

  async readOneById(id) {
    const [rows] = await this.database.query(
      `SELECT
      station_id,
      name,
      brand,
      address,
      latitude, 
      longitude, 
      position,
      socket_type,
      power,
      accessibility,
      postal_code
      FROM ${this.table}
      WHERE station_id = ?`,
      [id]
    );
    return rows[0];
  }

  async readAll() {
    const [rows] = await this.database.query(
      `SELECT
      station_id,
      name,
      brand,
      address,
      latitude, 
      longitude, 
      position,
      socket_type,
      power,
      accessibility,
      postal_code
      FROM ${this.table}`
    );
    return rows;
  }

  async update(id, station) {
    const {
      name,
      brand,
      address,
      latitude,
      longitude,
      position,
      socketType,
      power,
      accessibility,
      postalCode,
    } = station;
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET 
      name = ?,
      brand = ?,
      address = ?,
      latitude = ?, 
      longitude = ?, 
      position = ?,
      socket_type = ?,
      power = ?, 
      accessibility = ?,
      postal_code = ?
      WHERE station_id = ?`,
      [
        name,
        brand,
        address,
        latitude,
        longitude,
        position,
        socketType,
        power,
        accessibility,
        postalCode,
        id,
      ]
    );
    return result.affectedRows > 0;
  }

  async destroy(id) {
    const [result] = await this.database.query(
      `DELETE FROM ${this.table} WHERE station_id = ?`,
      [id]
    );
    return result.affectedRows > 0;
  }
}

module.exports = StationRepository;
