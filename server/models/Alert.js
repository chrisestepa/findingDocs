const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const alertSchema = new Schema({
  speciality: String,
  doctor: [{type: Schema.Types.ObjectId, ref: "User"}],
  center: {type: Schema.Types.ObjectId, ref: "Center"},
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Alert = mongoose.model('Alert', alertSchema);
module.exports = Alert;
