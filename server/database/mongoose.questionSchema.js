const mongoose = require("mongoose");

const questionSchema = mongoose.Schema(
  { question: String, answer: String },
  { timestamps: true }
);

const Question = mongoose.model("Question", questionSchema);
module.exports = Question;