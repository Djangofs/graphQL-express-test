import { GraphQLString, GraphQLID } from 'graphql';
import orderType from './orderType.mjs';
import { createOrder } from './orderResolvers.mjs';

export default {
  type: orderType,
  args: {
    id: {
      type: GraphQLID
    },
    userId: {
      type: GraphQLID
    },
    title: {
      type: GraphQLString
    },
    category: {
      type: GraphQLString
    }
  },
  resolve: (root, args) => {
    return createOrder(args);
  }
}