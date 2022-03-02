const mongoose = require('mongoose');

const Topic = mongoose.model(
  'Topics',
  new mongoose.Schema({    
    topic: {
      type: String,
      unique: true,
      dropDups: true,
      sparse: true,
    },
    path: {
      type: String,
    },
  })
);

exports.Topic = Topic;
