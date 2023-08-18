const router = require('express').Router();
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

var upload = multer({ storage: storage });

router.post('/upload', upload.array('files', 10), (req, res) => {
  try {
    res
      .status(201)
      .send({ message: 'Survey  Added Successfully.', status: 201 });
  } catch (err) {
    console.log(err.message);
  }
});

// controller call

const doctorController = require('../controller/doctor');
const roomController = require('../controller/room');
const screenSaverController = require('../controller/screenSaver');

// ********************* Survey ************************************
router.post(
  '/add-doctors',
  upload.single('doctor_image'),
  doctorController.add_doctor
);
router.get('/get_doctors', doctorController.get_doctors);
router.get('/get_doctor_by_id/:id', doctorController.get_doctor_by_id);
router.patch('/update_doctor/:id', doctorController.update_doctor);
router.delete('/delete_doctor/:id', doctorController.delete_doctor);

// ********************* Rooms ************************************
router.post('/add_room', roomController.add_room);
router.get('/get_rooms', roomController.get_rooms);
router.get('/get_room_by_id/:id', roomController.get_room_by_id);
router.patch('/update_room/:id', roomController.update_room);
router.delete('/delete_room/:id', roomController.delete_room);

// ********************* Screen Savers ************************************
router.post(
  '/add_screen_saver',
  upload.single('screen_saver_image'),
  screenSaverController.add_screen_saver
); // Update the field name
router.get('/get_screen_savers', screenSaverController.get_screen_savers);
router.get(
  '/get_screen_saver_by_id/:id',
  screenSaverController.get_screen_saver_by_id
);
router.patch(
  '/update_screen_saver/:id',
  screenSaverController.update_screen_saver
);
router.delete(
  '/delete_screen_saver/:id',
  screenSaverController.delete_screen_saver
);
module.exports = router;
