const express = require('express');
const app = express();
path = require('path');
require('dotenv').config();
const cors = require('cors');
const corsOptions = {
  origin: '*',
  // credentials:true,            //access-control-allow-credentials:true
  // optionSuccessStatus:200
};
app.use(cors(corsOptions));
const PORT = process.env.PORT || 6000;

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use('/uploads', express.static('uploads'));
// for the db
const connectDB = require('./db/connection');
connectDB();

// for the route
const router = require('./router');
app.use('/api', router);

app.listen(PORT, () => {
  console.log(`server runing ${process.env.PORT}`);
});
