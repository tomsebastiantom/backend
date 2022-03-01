const mongoose = require('mongoose');

const Question = mongoose.model(
  'Questions',
  new mongoose.Schema({
    questionno: {
      type: Number,
      unique: true,
    },
    annotations: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Question' }],
  })
);

exports.Question = Question;
