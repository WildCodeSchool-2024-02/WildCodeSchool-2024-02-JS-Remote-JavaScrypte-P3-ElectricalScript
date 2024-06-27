const express = require("express");
const multer = require("multer");
const fs = require("fs");

const upload = multer({ dest: "uploads/" });
const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

/**
 * TEST UPLOAD
 */

router.post("/upload", upload.single("station"), (req, res) => {

  /**
   * Je vais récupérer le ficher présent dans req.file, et le mettre dans le dossier `uploads`
   */

  fs.rename(
    `uploads/${req.file.filename}`,
    `uploads/bornes-irve.csv`,
    (err) => {
      if (err) throw err;
      res.status(201).json({ message: "Le fichier a bien été téléversé" });
    }
  );
});

const carRouter = require("./car/router");

router.use("/car", carRouter);

const roleRouter = require("./role/router");

router.use("/role", roleRouter);

const usersRouter = require("./users/router");

router.use("/users", usersRouter);

const stationRouter = require("./station/router");

router.use("/station", stationRouter);

const chargingPointRouter = require("./chargingpoint/router");

router.use("/chargingpoint", chargingPointRouter);

/* ************************************************************************* */

module.exports = router;