const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
  name: { type: String, required: true },
  icon: { type: String },
  // users: [{ type: objectId, required: false }],
  orders: { type: Number }
});

const companyModel = mongoose.model('company', companySchema);
module.exports = companyModel;
