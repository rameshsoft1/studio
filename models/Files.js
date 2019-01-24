const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const FileSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  files: {
    type: String,
    required: true
  }
});

module.exports = Files = mongoose.model('files', FileSchema);
