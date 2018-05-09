import { GraphQLSchema } from 'graphql';
import mutation from './rootMutation.mjs';
import query from './rootQuery.mjs';

export default new GraphQLSchema({
  query,
  mutation,
});
