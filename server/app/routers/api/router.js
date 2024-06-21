const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */
const carRouter = require("./car/router");

router.use("/car", carRouter);

/* ************************************************************************* */

module.exports = router;
