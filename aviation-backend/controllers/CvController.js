const asyncHandler = require("express-async-handler");
const CvModel = require("../models/CvModel");

const setCv = asyncHandler(async (req, res) => {
  console.log(req.body);
  if (!req.body.cv) {
    res.status(400);
    throw new Error("pelase add cv ");
  }

  const cv = await CvModel.create({
    cv: req.body.cv,
  });

  res.status(200).json(cv);
});

module.exports = {
  setCv,
};
