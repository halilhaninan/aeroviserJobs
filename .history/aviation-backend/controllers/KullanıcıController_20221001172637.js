const asyncHandler = require("express-async-handler");
const { find } = require("../models/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const tokenOlustur = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" });
};

const Kullanici = require("../models/UserModel");

const registerKullanici = asyncHandler(async (req, res) => {
  const { kullaniciAd, email, parola } = req.body;
  if (!kullaniciAd || !email || !parola) {
    res.status(400);
    throw new Error("lutfen gerekli alanlari doldurunuz");
  }

  const kullanici = await Kullanici.findOne({ email });

  if (kullanici) {
    res.status(400);
    throw new Error("this email already used");
  }

  const salt = await bcrypt.genSalt(10);
  const sifrelenmisParola = await bcrypt.hash(parola, salt);

  const yeniKullanici = await Kullanici.create({
    kullaniciAd,
    email,
    parola: sifrelenmisParola,
  });

  if (yeniKullanici) {
    res.status(201).json({
      _id: yeniKullanici.id,
      kullaniciAd: yeniKullanici.kullaniciAd,
      email: yeniKullanici.email,
      token: tokenOlustur(yeniKullanici._id),
    });
  } else {
    res.status(400);

    throw new Error("gecersiz kullanici verisi");
  }

  res.json({ message: "kullanici register islemleri" });
});

//
//
//
//
const loginKullanici = asyncHandler(async (req, res) => {
  const { kullaniciAd, parola } = req.body;

  const kullanici = await Kullanici.findOne({ kullaniciAd });

  if (kullanici && (await bcrypt.compare(parola, kullanici.parola))) {
    // const { id, kullaniciAd, email } = kullanici;
    res.json({
      _id: kullanici.id,
      kullaniciAd: kullanici.kullaniciAd,
      email: kullanici.email,
      token: tokenOlustur(kullanici._id),
    });
  } else {
    res.status(400);
    throw new Error("gecersiz email ya da parola");
  }
});
//
//
//
//
const getKullanici = asyncHandler(async (req, res) => {
  const { _id, kullaniciAd, email } = await Kullanici.findById(req.user.id);

  res.status(200).json({
    id: _id,
    kullaniciAd,
    email,
  });
});

module.exports = {
  registerKullanici,
  loginKullanici,
  getKullanici,
};
