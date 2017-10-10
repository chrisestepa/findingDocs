const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jobSchema = new Schema({
  title: String,
  datein: Date,
  dateout: Date,
  description: String,
  speciality: String,
  doctor: [{type: Schema.Types.ObjectId, ref: "User"}],
  center: {type: Schema.Types.ObjectId, ref: "Center"},

}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Job = mongoose.model('Job', jobSchema);
module.exports = Job;
