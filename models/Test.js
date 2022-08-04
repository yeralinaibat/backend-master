const { download } = require("express/lib/response");
const { Schema, model } = require("mongoose");

const Test = new Schema({
  category: {
    type: String,
    required: true,
  },
  languages: {
    type: String,
    enum: ["Kaz", "Rus"],
    required: true,
  },
  question: {
    type: Object,
    name: {
      type: String,
      required: true,
    },
    photoUrl: {
      type: String,
      required: true,
    },
  },
  correct_answer: {
    type: Object,
    name: {
      type: String,
      required: true,
    },
    photoUrl: {
      type: String,
      required: true,
    },
  },
  incorrect_answers: {
    type: Array,
    required: true,
    name: {
      type: String,
      required: true,
    },
    photoUrl: {
      type: String,
      required: true,
    },
  },
});

module.exports = model("Test", Test);
