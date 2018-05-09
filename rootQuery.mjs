import { GraphQLObjectType } from 'graphql';
import { user, users } from './src/user/userQueries.mjs';
import orders from './src/order/orderQueries.mjs';

export default new GraphQLObjectType({
    name: 'Query',
    fields: () => ({
      user,
      users, 
      orders 
    })
  })