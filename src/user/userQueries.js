const { GraphQLID, GraphQLList } = require('graphql');
const userType = require('./userType');
const { getUserById, getAllUsers } = require('./userResolvers');

module.exports = {
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