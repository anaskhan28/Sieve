
import mongoose from 'mongoose';

const videoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  noOfLikes: {
    type: Number,
    default: 0
  },
  summary: {
    type: String
  }
});

export default mongoose.model('Video', videoSchema);
