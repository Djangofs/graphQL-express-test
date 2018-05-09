import { GraphQLID, GraphQLList, GraphQLString, } from 'graphql';
import orderType from './orderType.mjs';
import { getOrders }from './orderResolvers.mjs';

export default {
  type: new GraphQLList(orderType),
  args: {
    userId: { type: GraphQLID },
    category: { type: GraphQLString },
    title: { type: GraphQLString }
  },
  resolve: (root, args) => {
    return getOrders({args});
  }
}