const tables = require("../../database/tables");

const create = async (req, res, next) => {
  const point = req.body;

  try {
    const insertId = await tables.point.create(point);

    res.status(201).json({ insertId });
  } catch (e) {
    next(e);
  }
};

const readAll = async (req, res, next) => {
  try {
    const point = await tables.point.readAll();

    res.json(point);
  } catch (e) {
    next(e);
  }
};

const readOneById = async (req, res, next) => {
  try {
    const point = await tables.point.readOneById(req.params.id);

    if (point == null) {
      res.sendStatus(404);
    } else {
      res.json(point);
    }
  } catch (e) {
    next(e);
  }
};

const update = async (req, res, next) => {
  const point = req.body;

  try {
    const updated = await tables.point.update(req.params.id, point);

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
    const destroyed = await tables.point.destroy(req.params.id);

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
