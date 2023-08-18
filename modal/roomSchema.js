const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
  timing: [
    {
      date: Date,
      start: String,
      end: String,
      doctor: String,
    },
  ],
  created_on: {
    type: Date,
    default: Date.now,
  },
  modified_on: {
    type: Date,
    default: Date.now,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
});
const Room = mongoose.model('Room', roomSchema);
module.exports = Room;
