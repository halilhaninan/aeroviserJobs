const express = require("express");
const { subscribeMail } = require("../controllers/SubscribeController");

const { kullaniciKontrol } = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/subscribe", subscribeMail);

module.exports = router;
