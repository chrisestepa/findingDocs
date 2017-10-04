const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jobSchema = new Schema({
  title: String,
  center: [{type: Schema.Types.ObjectId, ref: "Center"}],
  date: Date,
  description: String,
  doctor: [{type: Schema.Types.ObjectId, ref: "User"}],
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Job = mongoose.model('Job', jobSchema);
module.exports = Job;
