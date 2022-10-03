const jwt = require("jsonwebtoken");
const assyncHandler = require("express-async-handler");
const kullanici = require("../models/UserModel");
const { rawListeners } = require("../models/UserModel");

const kullaniciKontrol = assyncHandler(async (req, res, next) => {
  let sifrelenmisToken;
  console.log(req.headers.authorization);
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      sifrelenmisToken = req.headers.authorization.split(" ")[1];
      const token = jwt.verify(sifrelenmisToken, process.env.JWT_SECRET);

      req.user = await kullanici.findById(token.id).select("-parola");
      next();
    } catch {
      res.status(401);
      throw new Error("not accepted");
    }
  }

  if (!sifrelenmisToken) {
    res.status(401);
    throw new Error("token note found");
  }
});

module.exports = {
  kullaniciKontrol,
};
