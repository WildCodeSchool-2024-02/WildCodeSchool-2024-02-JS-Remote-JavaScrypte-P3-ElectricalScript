const multer = require("multer");
const fs = require("fs").promises;

const upload = multer({ dest: "../../public/uploads" });

const UploadFile = async (req, res, next) => {
  try {
    await new Promise((resolve, reject) => {
      upload.single("station")(req, res, (err) => {
        if (err) {
          return reject(err);
        }
        return resolve();
      });
    });

    await fs.rename(
      `../../public/uploads/${req.file.filename}`,
      `../../public/uploads/bornes-irve.csv`,
      (error) => {
        if (error) throw error;
        res.status(201).json({ message: "Le fichier a bien été téléversé" });
      }
    );

    next();
  } catch (error) {
    next(error);
  }
};

module.exports = UploadFile;
