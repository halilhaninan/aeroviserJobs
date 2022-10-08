const express = require("express");
const { setCv } = require("../controllers/CvController");

const router = express.Router();

router.post("/cv", setCv);

module.exports = router;
