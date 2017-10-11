const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const alertSchema = new Schema({
  title: String,
  speciality: String,
  doctor: {type: Schema.Types.ObjectId, ref: "User"},
  center: {type: Schema.Types.ObjectId, ref: "Center"},
  status: {type: Boolean, default: false}
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Alert = mongoose.model('Alert', alertSchema);
module.exports = Alert;
