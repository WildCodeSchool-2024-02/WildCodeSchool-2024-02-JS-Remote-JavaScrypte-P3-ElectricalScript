const express = require("express");

const router = express.Router();

const {
  create,
  readAll,
  readOneById,
  update,
  destroy,
} = require("../../../controllers/chargingPointActions");

router.get("/", readAll);

router.get("/:id", readOneById);

router.post("/", create);

router.put("/:id", update);

router.delete("/:id", destroy);

/* ************************************************************************* */

module.exports = router;
