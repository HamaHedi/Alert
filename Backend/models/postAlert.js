const mongoose = require('mongoose');

const alertSchema = new mongoose.Schema({
  alertName: { type: String },
  Alertmessage: { type: String, required: false },
  variable: { type: String, required: false },
  schema: { type: Array, required: false },
  AlertType: { type: String, required: false },
  days: { type: Number, required: false },
  daysMax: { type: Number, required: false },
  daysMin: { type: Number, required: false },
  hours: { type: Number, required: false },
  hoursMax: { type: Number, required: false },
  hoursMin: { type: Number, required: false },
  minute: { type: Number, required: false },
  minuteMax: { type: Number, required: false },
  minuteMin: { type: Number, required: false },
  percentage: { type: Number, required: false },
  percentageMax: { type: Number, required: false },
  percentageMin: { type: Number, required: false },
  operation: { type: String, required: false },
  date: { type: String, required: false },
  status: { type: String }
});

const alertModel = mongoose.model('alert', alertSchema);
module.exports = alertModel;
