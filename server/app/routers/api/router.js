const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */
const carRouter = require("./car/router");

router.use("/car", carRouter);

const roleRouter = require("./role/router");

router.use("/role", roleRouter);

const usersRouter = require("./users/router");

router.use("/users", usersRouter);

const pointRouter = require("./point/router");

router.use("/point", pointRouter);

/* ************************************************************************* */

module.exports = router;
