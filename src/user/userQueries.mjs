import { GraphQLID, GraphQLList } from 'graphql';
import userType from './userType.mjs';
import { getUserById, getAllUsers }from './userResolvers.mjs';

export const user = {
  type: userType,
  args: {
    id: { type: GraphQLID }
  },
  resolve: (parentValue, args) => {
    return getUserById(args);
  }
}

export const users = {
  type: new GraphQLList(userType),
  resolve: () => {
    return getAllUsers();
  }
}
