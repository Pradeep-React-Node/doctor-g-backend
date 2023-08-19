const Room = require('../modal/roomSchema');

module.exports.add_room = async function (req, res) {
  console.log('adding room', req.body);
  // try {
  //   const newRoom = new Room(req.body);
  //   await newRoom.save();
  //   res.status(201).json(newRoom);
  // } catch (error) {
  //   res.status(500).json({ error: 'Error creating room' });
  // }
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
