const mongoose = require("mongoose");

var CvModelSchema = mongoose.Schema({
  cv: {
    data: Buffer,
    contentType: String,
  },
});

module.exports = mongoose.model("CvModel", CvModelSchema);
