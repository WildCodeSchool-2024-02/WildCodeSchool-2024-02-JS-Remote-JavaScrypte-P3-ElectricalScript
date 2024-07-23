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
    const [rows] = await this.database.query(
      `SELECT u.first_name, u.last_name, u.email, u.role_id, u.car_type_id, c.brand, c.model FROM ${this.table} AS u LEFT JOIN car_type AS c ON u.car_type_id = c.car_type_id `
    );

    return rows;
  }

  async readOneById(id) {
    const [rows] = await this.database.query(
      ` SELECT u.first_name, u.last_name, u.email, u.role_id, u.car_type_id, c.brand, c.model, c.socket_type, c.image, re.status, re.price, re.start_at, re.end_at FROM ${this.table} AS u LEFT JOIN car_type AS c ON u.car_type_id = c.car_type_id LEFT JOIN reservation AS re ON re.user_id = u.user_id WHERE u.user_id = ?`,
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

  async updateCar(user) {
    const { carTypeId, userId } = user;
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET car_type_id = ? WHERE user_id = ?`,
      [carTypeId, userId]
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

  async findUserByEmail(email) {
    const [result] = await this.database.query(
      `SELECT u.user_id, r.role, first_name, password FROM ${this.table} as u JOIN role AS r on u.role_id = r.role_id  WHERE email = ?`,
      [email]
    );
    return result;
  }
}

module.exports = UsersRepository;
