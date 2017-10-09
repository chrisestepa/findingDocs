const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  name: String,
  phone: Number,
  collegiate: String,
  speciality: String,
  alerts: [{type: Schema.Types.ObjectId, ref: "Alert"}],
  role: {
    type: String,
    enum: ["admin", "doctor", "manager"],
    default: "doctor"
  }
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
