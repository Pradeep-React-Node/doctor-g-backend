const mongooose = require('mongoose');
const Schema = mongooose.Schema;

const doctorSchema = new Schema(
  {
    doctor_name: {
      type: String,
      required: true,
    },
    doctor_department: {
      type: String,
      required: true,
    },
    doctor_image: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Doctor = mongooose.model('Doctor', doctorSchema);
module.exports = Doctor;
