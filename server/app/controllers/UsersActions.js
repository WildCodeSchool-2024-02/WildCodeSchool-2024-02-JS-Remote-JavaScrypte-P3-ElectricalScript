// Import access to database tables
const tables = require("../../database/tables");

const create = async (req, res, next) => {
  const user = req.body;

  try {
    const insertId = await tables.users.create(user);

    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

const readAll = async (req, res, next) => {
  try {
    const user = await tables.users.readAll();

    res.json(user);
  } catch (err) {
    next(err);
  }
};

const readOneById = async (req, res, next) => {
  try {
    const user = await tables.users.readOneById(req.params.id);
    if (user == null) {
      res.sendStatus(404);
    } else {
      res.json(user);
    }
  } catch (err) {
    next(err);
  }
};

const update = async (req, res, next) => {
  const user = req.body;

  try {
    const updated = await tables.users.update(req.params.id, user);
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
    const destroyed = await tables.users.destroy(req.params.id);

    if (destroyed) {
      res.sendStatus(204);
    } else {
      res.sendStatus(404);
    }
  } catch (e) {
    next(e);
  }
};

module.exports = {
  create,
  readAll,
  readOneById,
  update,
  destroy,
};
