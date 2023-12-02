require('dotenv').config();
const { ApolloServer, gql } = require('apollo-server');
const mongoose = require('mongoose');
const JobModel = require('./schemas/Job');

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
  type Query {
    jobs: [Job]
  }
`;
const resolvers = {
  Query: {
    jobs: async () => {
      return await JobModel.find();
    }
  }
};
const server = new ApolloServer({ typeDefs, resolvers });
server.listen()
.then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
})
.catch(err => console.error(err));