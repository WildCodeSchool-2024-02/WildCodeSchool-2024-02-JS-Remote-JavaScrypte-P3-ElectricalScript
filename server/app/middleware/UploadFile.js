const multer = require("multer");
const fs = require("fs");

const upload = multer({ dest: "uploads/" });

const UploadFile =(req,res,next) => {

    try {
    upload.single("station")(req,res,(err) => {
    if (err) {
        throw err;
    }
    fs.rename(
        `uploads/${req.file.filename}`,
        `uploads/bornes-irve.csv`,
        (error) => {
          if (error) throw error;
          res.status(201).json({ message: "Le fichier a bien été téléversé" });
        }
      );
});
    } catch (error) {
        next(error);
    }
    };
  
module.exports = UploadFile;
   