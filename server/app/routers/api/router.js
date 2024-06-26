const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */
const carRouter = require("./car/router");

router.use("/car", carRouter);

const roleRouter = require("./role/router");

router.use("/role", roleRouter);

const stationRouter = require("./station/router");

router.use("/station", stationRouter);

/* ************************************************************************* */

module.exports = router;
