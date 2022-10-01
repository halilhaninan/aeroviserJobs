const mongoose = require("mongoose");

const mailSchema = mongoose.Schema(
  {
    email: {
      type: st
      required: [true, "please add your mail address"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("mail", mailSchema);
