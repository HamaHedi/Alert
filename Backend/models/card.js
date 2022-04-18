const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
  title: { type: String },
  name: { type: String },
  number: { type: Number }
});

const cardModel = mongoose.model('card', cardSchema);
module.exports = cardModel;
