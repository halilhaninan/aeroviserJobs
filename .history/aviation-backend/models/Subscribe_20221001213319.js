const mongoose = require("mongoose");

const notSchema = mongoose.Schema(
  {
    JobTitle: {
      type: String,
      required: [true, "please add job title"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Not", notSchema);
