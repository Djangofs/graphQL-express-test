import { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList } from 'graphql';
import userQueries from './src/user/userQueries.mjs';
import userMutation from './src/user/userMutation.mjs';

export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: userQueries
  }),
  mutation: new GraphQLObjectType({
    name: 'Mutation',
    fields: userMutation
  })
});
