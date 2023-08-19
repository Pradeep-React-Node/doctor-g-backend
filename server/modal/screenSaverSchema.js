const mongoose = require('mongoose');

const screenSaverSchema = new mongoose.Schema({
  image: String, // Add the image field for the screen saver
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

const ScreenSaver = mongoose.model('ScreenSaver', screenSaverSchema);
module.exports = ScreenSaver;
