const express = require("express");

const router = express.Router();
const multerMiddleware = require("../../../middleware/multerMiddleware"); 

router.post("/upload", multerMiddleware);

module.exports = router;