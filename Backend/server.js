// const bodyParser = require('body-parser');

const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();

const mongoose = require('mongoose');
// const cookieParser = require('cookieParser');

// les routes
const alertRoute = require('./routes/alert.js');
const cardRoute = require('./routes/card.js');
mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('connected successfully'))
  .catch((error) => console.log(`${error} did not connect`));

const corsOptions = {
  origin: '*',
  optionSuccessStatus: 200
};
// app.use(cookieParser());
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//route
app.use('/api/alert', alertRoute);
app.use('/api/card', cardRoute);

app.listen(process.env.PORT, () =>
  console.log(`Server Running on Port: http://localhost:${process.env.PORT}`)
);
