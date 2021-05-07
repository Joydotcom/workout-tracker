const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  exercises: [
    {
      type: { type: String, trim: true, require:"Enter exercise type." },
      name: { type: String, trim:true, required:"Enter name of exercise." },
      duration: { type: Number, required:"Enter exercise duration in minutes." },
      weight: { type: Number },
      reps: { type: Number },
      sets: { type: Number },
      distance: { type: Number },
    },
  ],
  day: {
    type: Date,
    default: Date.now,
  },
});

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;
