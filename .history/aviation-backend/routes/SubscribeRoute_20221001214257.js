const express = require("express");
const { subscribeMail } = require("../controllers/SubscribeController");

const router = express.Router();

router.post("/subscribe", subscribeMail);

module.exports = router;
