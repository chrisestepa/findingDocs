const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const centerSchema = new Schema({
  title: String,
  address: {
    locality: String,
    postalcode: String,
    streetaddress: String
  },
  location: {
    latitude: Number,
    longitude: Number
  }

});

const Center = mongoose.model('Center', centerSchema);
module.exports = Center;
