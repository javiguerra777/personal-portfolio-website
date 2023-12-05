require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cloudinary = require('cloudinary');
const mongoose = require('mongoose');
const JobModel = require('./schemas/Job');
const ProjectModel = require('./schemas/Project');

const app = express();
const port = process.env.PORT || 4000;
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET 
});

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('DB connected'))
.catch(err => console.error(err));

app.use(express.static('public'));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.get('/api/jobs', async (req, res) => {
  try {
    const jobs = await JobModel.find();
    res.json(jobs);
  } catch (err) {
    console.error(err);
    res.status(500).send('Failed to fetch jobs');
  }
});
app.get('/api/projects', async (req, res) => {
  try {
    const projects = await ProjectModel.find();
    res.json(projects);
  } catch (err) {
    console.error(err);
    res.status(500).send('Failed to fetch projects');
  }
});
app.get('/api/files/carousal_images', async (req, res) => {
  try {
    const { resources } = await cloudinary.v2.api.resources({ type: 'upload', prefix: 'portfolio_files/carousel_images', max_results: 30});
    res.json(resources);
  } catch (err) {
    console.error(err);
    res.status(500).send('Failed to fetch carousal images');
  }
});
app.get('/api/files/resume', async (req, res) => {
  try {
    const { resources } = await cloudinary.v2.api.resources({ type: 'upload', prefix: 'portfolio_files/resume', max_results: 30});
    res.json(resources);
  } catch (err) {
    console.error(err);
    res.status(500).send('Failed to fetch resume');
  }
});
app.listen(port, () => {
  console.log(`Server running at port ${process.env.PORT || 4000}`);
});

module.exports = app;