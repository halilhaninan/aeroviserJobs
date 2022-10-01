const asyncHandler = require("express-async-handler");
const { find } = require("../models/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const mail = require("../models/SubscribeModel");

const subscribeMail = asyncHandler(async(req,res)=>{
    
})