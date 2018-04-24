const { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList } = require('graphql');
const User = require('./src/db/models/User');
const userType = require('./src/user/userType');
const userQueries = require('./src/user/userQueries');
const userMutation = require('./src/user/userMutation');

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: userQueries
  }),
  mutation: new GraphQLObjectType({
    name: 'Mutation',
    fields: userMutation
  })
});

module.exports = schema;