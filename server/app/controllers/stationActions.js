const tables = require("../../database/tables");

const create = async (req, res, next) => {
  const station = req.body;
  try {
    const insertId = await tables.station.create(station);
    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

const readAll = async (req, res, next) => {
  try {
    const station = await tables.station.readAll();
    res.json(station);
  } catch (err) {
    next(err);
  }
};

const readOneById = async (req, res, next) => {
  try {
    const station = await tables.station.readOneById(req.params.id);
    if (station == null) {
      res.sendStatus(404);
    } else {
      res.json(station);
    }
  } catch (err) {
    next(err);
  }
};

const update = async (req, res, next) => {
  const station = req.body;
  try {
    const edited = await tables.station.update(req.params.id, station);
    if (edited) {
      res.sendStatus(204);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    next(err);
  }
};

const destroy = async (req, res, next) => {
  try {
    const destroyed = await tables.station.destroy(req.params.id);
    if (destroyed) {
      res.sendStatus(204);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  create,
  readAll,
  readOneById,
  update,
  destroy,
};
