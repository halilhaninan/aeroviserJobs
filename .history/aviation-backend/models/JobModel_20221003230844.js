const mongoose = require("mongoose");

const notSchema = mongoose.Schema(
  {
    category: {
      type: String,
      required: [true, "please add job title"],
    },
    JobTitle: {
      type: String,
      required: [true, "please add job title"],
    },
    CompanyName: {
      type: String,
      required: [true, "please add company name"],
    },
    Location: {
      type: String,
      required: [true, "please add location"],
    },
    Description: {
      type: String,
      required: [true, "please add description"],
    },
    Requirements: {
      type: String,
      required: [true, "please add requirements"],
    },
    Salary: {
      type: String,
      required: [(true, "please add salary ")],
    },
    other: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Not", notSchema);
