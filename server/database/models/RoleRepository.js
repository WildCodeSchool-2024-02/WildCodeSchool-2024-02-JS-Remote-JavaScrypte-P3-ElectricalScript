const AbstractRepository = require("./AbstractRepository");

class RoleRepository extends AbstractRepository {
  constructor() {
    super({ table: "role" });
  }

  async create(role) {
    const roleName = role;
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (role) VALUES (?)`,
      [roleName]
    );
    return result.insertId;
  }

  async readAll() {
    const [rows] = await this.database.query(`SELECT * FROM ${this.table}`);
    return rows;
  }

  async readOneById(id) {
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE role_id = ?`,
      [id]
    );
    return rows[0];
  }

  async update(id, role) {
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET role = ? WHERE role_id = ?`,
      [role.role, id]
    );
    return result.affectedRows > 0;
  }

  async destroy(id) {
    const [result] = await this.database.query(
      `DELETE FROM ${this.table} WHERE role_id = ?`,
      [id]
    );
    return result.affectedRows > 0;
  }
}
module.exports = RoleRepository;
