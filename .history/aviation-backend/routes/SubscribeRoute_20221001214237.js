const express = require("express");
const { subscribeMail } = require("../controllers/SubscribeController");

const { kullaniciKontrol } = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/", subscribeMail);
router.post("/login", loginKullanici);
router.get("/kullanici", kullaniciKontrol, getKullanici);

module.exports = router;
