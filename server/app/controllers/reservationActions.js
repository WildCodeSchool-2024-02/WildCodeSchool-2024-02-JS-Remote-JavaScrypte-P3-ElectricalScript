// Import access to database tables
const tables = require("../../database/tables");

const create = async (req, res, next) => {
  const reservation = req.body;

  try {
    const insertId = await tables.reservation.create(reservation);

    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

const readAll = async (req, res, next) => {
  try {
    const reservation = await tables.reservation.readAll();

    res.json(reservation);
  } catch (err) {
    next(err);
  }
};

const readOneById = async (req, res, next) => {
  try {
    const reservation = await tables.reservation.readOneById(req.params.id);
    if (reservation == null) {
      res.sendStatus(404);
    } else {
      res.json(reservation);
    }
  } catch (err) {
    next(err);
  }
};

const update = async (req, res, next) => {
  const reservation = req.body;

  try {
    const updated = await tables.reservation.update(req.params.id, reservation);
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
    const destroyed = await tables.reservation.destroy(req.params.id);

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
