const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const itemsRouter = require("./items/router");

router.use("/items", itemsRouter);

const usersRouter = require("./users/router");

router.use("/users", usersRouter);

const reservationRouter = require("./reservation/router");

router.use("/reservation", reservationRouter);

/* ************************************************************************* */

module.exports = router;
