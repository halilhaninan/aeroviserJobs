const express = require("express");
const { subscribeMail } = require("../controllers/SubscribeController");

const router = express.Router();

router.post("/", subscribeMail);
router.post("/", subscribeMail);

module.exports = router;
