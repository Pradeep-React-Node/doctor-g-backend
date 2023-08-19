const ScreenSaver = require('../modal/screenSaverSchema');

module.exports.add_screen_saver = async function (req, res) {
  const image = req?.file?.filename; // Get the uploaded image filename

  try {
    const screenSaver = new ScreenSaver({
      image, // Save the image filename in the screen saver document
    });
    await screenSaver.save();
    res.status(201).json({ message: 'Screen Saver added successfully' });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

module.exports.get_screen_savers = async function (req, res) {
  try {
    const screenSavers = await ScreenSaver.find({});
    res.send(screenSavers);
  } catch (err) {
    res.status(400).send(err);
  }
};

module.exports.get_screen_saver_by_id = async function (req, res) {
  try {
    const _id = req.params.id;
    const screenSaver = await ScreenSaver.findById(_id);
    res.send(screenSaver);
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports.update_screen_saver = async function (req, res) {
  const image = req?.file?.filename; // Get the uploaded image filename

  try {
    const _id = req.params.id;
    const screenSaver = await ScreenSaver.findByIdAndUpdate(
      _id,
      { image, modified_on: Date.now() },
      { new: true }
    );
    res.send(screenSaver);
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports.delete_screen_saver = async function (req, res) {
  try {
    const screenSaver = await ScreenSaver.findByIdAndDelete(req.params.id);
    if (!req.params.id) {
      return res.status(400).send();
    }
    res.send(screenSaver);
  } catch (err) {
    res.status(500).send(err);
  }
};
