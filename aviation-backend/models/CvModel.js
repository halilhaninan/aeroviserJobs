const mongoose = require("mongoose");

var CvModelSchema = mongoose.Schema({
  name: String,
  desc: String,
  cv: {
    data: Buffer,
    contentType: String,
  },
});



//Image is a model which has a schema imageSchema

module.exports = new mongoose.model("CvModel", CvModelSchema);
