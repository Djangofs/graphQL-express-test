const { GraphQLString, GraphQLID } = require('graphql');
const userType = require('./userType');
const { createUser } = require('./userResolvers');

module.exports = {
  createUser: {
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
}