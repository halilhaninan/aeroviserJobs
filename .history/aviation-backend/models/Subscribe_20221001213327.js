const mongoose = require("mongoose");

const mail = mongoose.Schema(
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

module.exports = mongoose.model("Not", notSchema);
