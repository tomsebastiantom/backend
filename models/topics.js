const mongoose = require('mongoose');

const Topic = mongoose.model(
  'Topics',
  new mongoose.Schema({    
    topic: {
      type: String,
      unique: true,
    },
    path: {
      type: String,
    },
  })
);

exports.Topic = Topic;
