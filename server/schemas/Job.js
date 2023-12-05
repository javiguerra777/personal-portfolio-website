const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
  company: String,
  workDates: String,
  startDate: String,
  endDate: String,
  description: String,
});
const DataModel = mongoose.model('Job', JobSchema);

module.exports = DataModel;