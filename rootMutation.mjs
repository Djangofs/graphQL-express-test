import { GraphQLObjectType } from 'graphql';
import createUser from './src/user/userMutation.mjs';
import createOrder from './src/order/orderMutation.mjs';

export default new GraphQLObjectType({
    name: 'Mutation',
    fields: () => ({
      createUser,
      createOrder
    })
  })