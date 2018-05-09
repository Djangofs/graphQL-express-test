import { GraphQLString, GraphQLID } from 'graphql';
import userType from './userType.mjs';
import { createUser } from './userResolvers.mjs';

export default {
  type: userType,
  args: {
    id: {
      type: GraphQLID
    },
    firstName: {
      type: GraphQLString
    },
    lastName: {
      type: GraphQLString
    }
  },
  resolve: (root, args) => {
    return createUser(args);
  }
}