require('dotenv').config();
const { ApolloServer, gql, ApolloError } = require('apollo-server');
const cloudinary = require('cloudinary');
const mongoose = require('mongoose');
const JobModel = require('./schemas/Job');

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET 
});

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('DB connected'))
.catch(err => console.error(err));

const typeDefs = gql`
  type Job {
    _id: ID
    company: String
    workDates: String
    startDate: String
    endDate: String
    description: String
  }
  type File {
    public_id: String
    format: String
    version: Int
    url: String
    secure_url: String
  }
  type Query {
    jobs: [Job]
    filesInCarouselImages: [File]!
    resumeFile: [File]!
  }
`;
const resolvers = {
  Query: {
    jobs: async () => {
      try {
        return await JobModel.find();
      } catch (err) {
        console.error(err);
        throw new ApolloError('Failed to fetch jobs');
      }
    },
    filesInCarouselImages: async () => {
      try {
        const { resources } = await cloudinary.v2.api.resources({ type: 'upload', prefix: 'portfolio_files/carousel_images', max_results: 30});
        return resources;
      } catch (err) {
        console.error(err);
        throw new ApolloError('Failed to fetch carousel images')
      }
    },
    resumeFile: async() => {
      try {
        const { resources } = await cloudinary.v2.api.resources({ type: 'upload', prefix: 'portfolio_files/resume', max_results: 30});
        return resources;
      } catch(err) {
        console.error(err);
        throw new ApolloError('Failed to fetch resume')
      }
    },
  }
};
const server = new ApolloServer({ typeDefs, resolvers });
server.listen()
.then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
})
.catch(err => console.error(err));