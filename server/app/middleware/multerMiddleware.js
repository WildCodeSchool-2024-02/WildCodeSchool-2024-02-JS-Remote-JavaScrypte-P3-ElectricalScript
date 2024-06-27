const multer = require("multer");
const fs = require("fs");
const express = require("express");

const app = express();

function funcMulterMiddleware() {
  const upload = multer({ dest: "uploads/" });

  app.post("/upload", upload.single("station"), async (req, res) => {
    try {
      await new Promise((resolve, reject) => {
        fs.rename(
          `uploads/${req.file.filename}`,
          `uploads/bornes-irve.csv`,
          (err) => {
            if (err) reject(err);
            else resolve();
          }
        );
      });

      res.status(201).json({ message: "The file has been successfully uploaded!" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
}

funcMulterMiddleware();

module.exports = app;