const asyncHandler = require("express-async-handler");
const { find } = require("../models/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const mail = require("../models/SubscribeModel");

const subscribeMail = asyncHandler(async (req, res) => {
  const { email } = req.body;
  if (!email) {
    res.status(400);
    throw new Error("please add your mail addres");
  }

  const newMail = await mail.create({
    email,
  });
  if(new)
});
