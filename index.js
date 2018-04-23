const express = require('express');
const graphqlHTTP = require('express-graphql');
const { GraphQLSchema, GraphQLObjectType, GraphQLString } = require('graphql');

const app = express();

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      hello: {
        type: GraphQLString,
        resolve: (root, args, context, info) => {
          return 'Hello World'
        }
      }
    }
  })
})

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true // enable GraphiQL
}))

app.listen(4000);