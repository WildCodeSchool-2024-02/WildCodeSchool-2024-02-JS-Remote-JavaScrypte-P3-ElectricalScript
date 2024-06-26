const tables = require("../../database/tables");

const create = async (req, res, next) => {
  const chargingPoint = req.body;

  try {
    const insertId = await tables.charging_point.create(chargingPoint);

    res.status(201).json({ insertId });
  } catch (e) {
    next(e);
  }
};

const readAll = async (req, res, next) => {
  try {
    const chargingPoint = await tables.charging_point.readAll();

    res.json(chargingPoint);
  } catch (e) {
    next(e);
  }
};

const readOneById = async (req, res, next) => {
  try {
    const chargingPoint = await tables.charging_point.readOneById(
      req.params.id
    );

    if (chargingPoint == null) {
      res.sendStatus(404);
    } else {
      res.json(chargingPoint);
    }
  } catch (e) {
    next(e);
  }
};

const update = async (req, res, next) => {
  const chargingPoint = req.body;

  try {
    const updated = await tables.charging_point.update(
      req.params.id,
      chargingPoint
    );

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
    const destroyed = await tables.charging_point.destroy(req.params.id);

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
