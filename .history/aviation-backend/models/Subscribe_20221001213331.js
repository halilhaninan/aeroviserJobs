const mongoose = require("mongoose");

const mailSchema = mongoose.Schema(
  {
    mail: {
      type: String,
      required: [true, "please add job title"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Not", mailSchema);
