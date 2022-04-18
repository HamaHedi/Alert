const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;
const alertSchema = new mongoose.Schema(
  {
    alertName: { type: String },
    alertmessage: { type: String, required: false },
    variable: { type: String, required: false },
    path: { type: String, required: false },
    alertType: { type: String, required: false },
    company: { type: ObjectId, ref: 'company' },
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
  },
  { timestamps: true }
);

const alertModel = mongoose.model('alert', alertSchema);
module.exports = alertModel;
