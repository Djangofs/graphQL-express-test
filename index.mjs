import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schema.mjs';

const app = express();

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true // enable GraphiQL
}))

app.listen(4000);