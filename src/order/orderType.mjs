import { GraphQLObjectType, GraphQLString, GraphQLID } from 'graphql';

export default new GraphQLObjectType({
  name: 'Order',
  fields: {
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    category: { type: GraphQLString }
  }
});