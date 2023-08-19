const Doctor = require('../modal/doctorSchema');

module.exports.add_doctor = async function (req, res) {
  console.log(req.body);
  const doctor_image = req?.file?.filename;
  console.log('file log', req.file);
  const { doctor_name, doctor_department } = req.body;
  if (!doctor_name || !doctor_department) {
    return res.status(422).json({ error: 'Please fill the fields properly' });
  }
  try {
    const doctor = new Doctor({
      doctor_name,
      doctor_department,
      doctor_image,
    });
    await doctor.save();
    res.status(201).json({ message: 'Doctor added successfully' });
  } catch (err) {
    console.log(err);
    res.status(500).send(err); // Add proper error response here
  }
};

module.exports.get_doctors = async function (req, res) {
  try {
    const doctors = await Doctor.find({});
    res.send(doctors);
  } catch (err) {
    res.status(400).send(err);
  }
};

module.exports.get_doctor_by_id = async function (req, res) {
  try {
    const _id = req.params.id;
    const doctor = await Doctor.findById(_id);
    res.send(doctor);
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports.update_doctor = async function (req, res) {
  try {
    const _id = req.params.id;
    const doctor = await Doctor.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(doctor);
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports.delete_doctor = async function (req, res) {
  try {
    const doctor = await Doctor.findByIdAndDelete(req.params.id);
    if (!req.params.id) {
      return res.status(400).send();
    }
    res.send(doctor);
  } catch (err) {
    res.status(500).send(err);
  }
};
