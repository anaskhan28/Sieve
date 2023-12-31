
import mongoose from 'mongoose';

const playlistSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  playlistId: {
    type: String,
    unique: true,
    required: true
  },
  link: {
    type: String,
    unique: true,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  noOfViews: {
    type: Number,
    default: 0
  },
  videos: [
    {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Video'
  }
],
  rating: {
    type: Number,
    default: 0
  },
  noOfRatings: {
    type: Number,
    default: 0
  },
  comments: [
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
      }
    ]
});

export const Playlist = mongoose.model('Playlist', playlistSchema);

