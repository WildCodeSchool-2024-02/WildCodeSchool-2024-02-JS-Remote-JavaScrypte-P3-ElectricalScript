const tables = require("../../database/tables");

const create = async (req, res, next) => {
  const { role } = req.body;

  try {
    const insertId = await tables.role.create(role);

    res.status(201).json({ insertId });
  } catch (e) {
    next(e);
  }
};

const readAll = async (req, res, next) => {
  try {
    const role = await tables.role.readAll();

    res.json(role);
  } catch (e) {
    next(e);
  }
};

const readOneById = async (req, res, next) => {
  try {
    const role = await tables.role.readOneById(req.params.id);

    if (role == null) {
      res.sendStatus(404);
    } else {
      res.json(role);
    }
  } catch (e) {
    next(e);
  }
};

const update = async (req, res, next) => {
  const role = req.body;

  try {
    const updated = await tables.role.update(req.params.id, role);

    if (updated) {
      res.sendStatus(204);
    } else {
      res.sendStatus(404);
    }
  } catch (e) {
    next(e);
  }
};

const destroy = async (req, res, next) => {
  try {
    const destroyed = await tables.role.destroy(req.params.id);

    if (destroyed) {
      res.sendStatus(204);
    } else {
      res.sendStatus(404);
    }
  } catch (e) {
    next(e);
  }
};

module.exports = { create, readAll, readOneById, update, destroy };
