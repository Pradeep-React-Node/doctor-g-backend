const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
  date: Date,
  timing: [
    {
      start: String,
      end: String,
      booked: {
        type: Boolean,
        default: false,
      },
      doctor_name: {
        type: String,
      },
    },
  ],
});

const Room = mongoose.model('Room', roomSchema);

module.exports = Room;
