import { GraphQLID, GraphQLList } from 'graphql';
import userType from './userType.mjs';
import { getUserById, getAllUsers }from './userResolvers.mjs';

export default {
  user: {
    type: userType,
    args: {
      id: { type: GraphQLID }
    },
    resolve: (root, args) => {
      return getUserById(args);
    }
  },
  users: {
    type: new GraphQLList(userType),
    resolve: () => {
      return getAllUsers();
    }
  }
}