const mongoose = require("mongoose");

const mailSchema = mongoose.Schema(
  {
    email: {
      type: str
      required: [true, "please add your mail address"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("mail", mailSchema);
