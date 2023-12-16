
const mongoose = require('mongoose');

const questionSetSchema = new mongoose.Schema({
  videoId: {
    type: String,
    required: true
  },
  questions: {
    type: [String],
    required: true
  }
});

module.exports = mongoose.model('QuestionSet', questionSetSchema);
