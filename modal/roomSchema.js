const mongoose = require('mongoose');

const timingSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  start: {
    type: String,
    required: true,
  },
  end: {
    type: String,
    required: true,
  },
  doctor: {
    type: String,
    required: true,
  },
});

const roomSchema = new mongoose.Schema({
  timing: [timingSchema], // An array of objects using the timingSchema
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
