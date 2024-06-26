const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import item-related actions
const {
  create,
  readAll,
  readOneById,
  update,
  destroy,
} = require("../../../controllers/carActions");

router.post("/", create);
router.get("/", readAll);
router.get("/:id", readOneById);
router.put("/:id", update);
router.delete("/:id", destroy);

/* ************************************************************************* */

module.exports = router;
