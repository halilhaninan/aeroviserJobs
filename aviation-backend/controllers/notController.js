const asyncHandler = require("express-async-handler");
const notModel = require("../models/JobModel.js");
const kullaniciModel = require("../models/UserModel.js");

const getNotlar = asyncHandler(async (req, res) => {
  console.log(req.query);
  const notlar = await notModel.find(req.query).sort({ createdAt: -1 });

  res.status(200).json(notlar);
});

const setNotlar = asyncHandler(async (req, res) => {
  console.log(req.body);
  if (
    !req.body.JobTitle ||
    !req.body.CompanyName ||
    !req.body.Location ||
    !req.body.Description ||
    !req.body.Requirements ||
    !req.body.Salary
  ) {
    res.status(400);
    throw new Error("pelase add content ");
  }
  console.log(req.body.CompanyName, "reqboddyyy");
  const not = await notModel.create({
    Category: req.body.Category,
    JobTitle: req.body.JobTitle,
    CompanyName: req.body.CompanyName,
    Location: req.body.Location,
    Description: req.body.Description,
    Requirements: req.body.Requirements,
    Salary: req.body.Salary,
    other: req.body.other,
  });

  res.status(200).json(not);
});

const updateNotlar = asyncHandler(async (req, res) => {
  // res
  //   .status(200)
  //   .json({ mesaj: `controller ${req.params.id} idli notlar updatenotlar` });

  const not = await notModel.findById(req.params.id);

  const kullanici = await kullaniciModel.findById(req.user.id);

  if (!kullanici) {
    res.status(400);
    throw new Error("kullanici bulunamadi");
  }

  // kullanici kendi notunu goruntuluyor mu???
  if (not.kullanici.toString() !== kullanici.id) {
    res.status(401);
    throw new Error("kullanici yetkili degil");
  }

  if (!not) {
    res.status(400);
    throw new Error("not bulunamadi");
  }

  const guncellendi = await notModel.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json(guncellendi);
});

const deleteNotlar = asyncHandler(async (req, res) => {
  // res.status(200).json({
  //   mesaj: `controller ${req.params.id} idli notlar delete notlar`,
  // });

  const not = await notModel.findById(req.params.id);
  const kullanici = await kullaniciModel.findById(req.user.id);

  if (!kullanici) {
    res.status(400);
    throw new Error("user not found");
  }

  if (!not) {
    res.status(400);
    throw new Error("delete not found");
  }

  if (not.kullanici.toString() !== kullanici.id) {
    res.status(401);
    throw new Error("user not authorized");
  }

  await not.remove();

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getNotlar,
  setNotlar,
  updateNotlar,
  deleteNotlar,
};
