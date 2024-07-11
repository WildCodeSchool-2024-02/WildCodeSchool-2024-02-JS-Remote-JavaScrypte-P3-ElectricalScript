const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

router.post("/upload, UploadFile");

const carRouter = require("./car/router");

router.use("/car", carRouter);

const roleRouter = require("./role/router");

router.use("/role", roleRouter);

const usersRouter = require("./users/router");

router.use("/users", usersRouter);

const stationRouter = require("./station/router");

router.use("/station", stationRouter);

const reservationRouter = require("./reservation/router");

router.use("/reservation", reservationRouter);
/* ************************************************************************* */

module.exports = router;
