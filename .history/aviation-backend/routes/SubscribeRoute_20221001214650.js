const express = require("express");
const { subscribeMail } = require("../controllers/SubscribeController");
const { kullaniciKontrol } = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/", subscribeMail);
router.get("/mail", kullaniciKontrol, subscribeMail);

module.exports = router;
