const Room = require('../modal/roomSchema');

module.exports.add_room = async function (req, res) {
  const { timing } = req.body;

  try {
    const room = new Room({
      timing,
    });
    await room.save();
    res.status(201).json({ message: 'Room added successfully' });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

module.exports.get_rooms = async function (req, res) {
  try {
    const rooms = await Room.find({});
    res.send(rooms);
  } catch (err) {
    res.status(400).send(err);
  }
};

module.exports.get_room_by_id = async function (req, res) {
  try {
    const _id = req.params.id;
    const room = await Room.findById(_id);
    res.send(room);
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports.update_room = async function (req, res) {
  const { timing } = req.body;

  try {
    const _id = req.params.id;
    const room = await Room.findByIdAndUpdate(
      _id,
      { timing, modified_on: Date.now() },
      { new: true }
    );
    res.send(room);
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports.delete_room = async function (req, res) {
  try {
    const room = await Room.findByIdAndDelete(req.params.id);
    if (!req.params.id) {
      return res.status(400).send();
    }
    res.send(room);
  } catch (err) {
    res.status(500).send(err);
  }
};
