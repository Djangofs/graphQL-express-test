import { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList } from 'graphql';
import orderType from '../order/orderType.mjs'
import { getOrders } from '../order/orderResolvers.mjs'

export default new GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: GraphQLID },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    orders: {
      type: new GraphQLList(orderType),
      args: {
        category: { type: GraphQLString },
        title: { type: GraphQLString }
      },
      resolve: ({id}, args) => {
        const category = args.category;
        return getOrders({id, args});
      }
    }
  }
});