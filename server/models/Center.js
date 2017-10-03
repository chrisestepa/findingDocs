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

}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Center = mongoose.model('Center', centerSchema);
module.exports = Center;
