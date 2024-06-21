const tables = require("../../database/tables");

const create = async (req, res, next) => {
  const car = req.body;
  try {
    const insertId = await tables.car_type.create(car);
    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

const readAll = async (req, res, next) => {
  try {
    const car = await tables.car_type.readAll();
    res.json(car);
  } catch (err) {
    next(err);
  }
};

const readOneById = async (req, res, next) => {
  try {
    const car = await tables.car_type.readOneById(req.params.id);
    if (car == null) {
      res.sendStatus(404);
    } else {
      res.json(car);
    }
  } catch (err) {
    next(err);
  }
};

const update = async (req, res, next) => {
  const car = req.body;
  try {
    const edited = await tables.car_type.update(req.params.id, car);
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
    const destroyed = await tables.car_type.destroy(req.params.id);
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
