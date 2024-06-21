const AbstractRepository = require("./AbstractRepository");

class CarRepository extends AbstractRepository {
  constructor() {
    super({ table: "car_type" });
  }

  async create(car) {
    const { brand, model, image, socketType } = car;
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (
      brand,
      model,
      socket_type,
      image)
      VALUES (?, ?, ?, ?)`,
      [brand, model, image, socketType]
    );
    return result.insertId;
  }

  async readOneById(id) {
    const [rows] = await this.database.query(
      `SELECT 
      car_type_id,
      brand, 
      model,
      socket_type,
      image
      FROM ${this.table}
      WHERE car_type_id = ?`,
      [id]
    );
    return rows[0];
  }

  async readAll() {
    const [rows] = await this.database.query(
      `SELECT
      car_type_id,
      brand,
      model,
      socket_type,
      image
      FROM ${this.table}`
    );
    return rows;
  }

  async update(id, car) {
    const { brand, model, image, socketType } = car;
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET 
      brand = ?, 
      model = ?, 
      socket_type = ?,
      image = ? 
      WHERE car_type_id = ?`,
      [brand, model, image, socketType, id]
    );
    return result.affectedRows > 0;
  }

  async destroy(id) {
    const [result] = await this.database.query(
      `DELETE FROM ${this.table} WHERE car_type_id = ?`,
      [id]
    );
    return result.affectedRows > 0;
  }
}

module.exports = CarRepository;
