let mongoose = require('mongoose');

const showSchema = new mongoose.Schema({
  _id: {
    type: Number,
    required: true
  },
  name: {
    type: String,
  },
  airsDayOfWeek:{
    type: String,
  },
  airsTime: {
    type: String,
  },
  firstAired: {
    type: Date,
    default: Date.now
  },
  genre: [{
    type: String,
}],
  network: {
    type: String,
  },
  overview: {
    type: String,
  },
  rating: {
    type: String,
  },
  runtime: {
    type: Number,
  },
  status:{
    type: String,
  },
  poster: {
    type: String,
  },
  banner: {
    type: String,
  },
  subscribers: [{
    type: String
  }],
  episodes: [{
      season: {
        type: Number,
      },
      episodeNumber: {
        type: Number,
      },
      firstAired: {
        type: Date,
        default: Date.now
      },
      overview: {
        type: String,
      },
      seriesId: {
        type: Number,
      },
      filename:{
        type: String
      }
  }]
})

module.exports = mongoose.model('Show', showSchema);
