const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  name: String,
  deployedLink: {type: String, default: null},
  description: String,
  image: String,
  link: {type: String, default: null},
});
const DataModel = mongoose.model('Project', ProjectSchema);

module.exports = DataModel;