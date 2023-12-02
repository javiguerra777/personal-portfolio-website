require('dotenv').config();
const { ApolloServer, gql } = require('apollo-server');
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('DB connected'))
.catch(err => console.error(err));
const typeDefs = gql`
  type Query {
    hello: String
  }
`;
const resolvers = {
  Query: {
    hello: () => 'world'
  }
};
const server = new ApolloServer({ typeDefs, resolvers });
server.listen()
.then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
})
.catch(err => console.error(err));