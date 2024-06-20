const AbstractRepository = require("./AbstractRepository");

class UsersRepository extends AbstractRepository {
  constructor() {
    super({ table: "users" });
  }

  async create(user) {
    const { firstName, lastName, email, password, roleId, carTypeId } = user;
    const [result] = await this.database.query(
      `INSERT INTO ${this.table}(first_name, last_name, email, password, role_id, car_type_id) values (?, ?, ?, ?, ?, ?)`,
      [firstName, lastName, email, password, roleId, carTypeId]
    );
    return result.insertId;
  }

  async readAll() {
    const [rows] = await this.database.query(`SELECT * FROM ${this.table}`);

    return rows;
  }

  async readOneById(id) {
    const [rows] = await this.database.query(
      ` SELECT * FROM  ${this.table} WHERE user_id = ?`,
      [id]
    );
    return rows[0];
  }

  async update(id, user) {
    const { firstName, lastName, email, password, roleId, carTypeId } = user;
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET first_name = ?, last_name = ?, email = ?, password = ?, role_id = ?, car_type_id = ? WHERE user_id = ?`,
      [firstName, lastName, email, password, roleId, carTypeId, id]
    );

    return result.affectedRows > 0;
  }

  async destroy(id) {
    const [result] = await this.database.query(
      `DELETE FROM ${this.table} WHERE user_id = ?`,
      [id]
    );
    return result.affectedRows > 0;
  }
}

module.exports = UsersRepository;
