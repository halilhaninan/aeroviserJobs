const express = require("express");
const { setCv } = require("../controllers/CvController");
const { upload } = require("../helper/FileHelper");

const router = express.Router();

router.post("/cv", upload.single("file"), setCv);

module.exports = router;
