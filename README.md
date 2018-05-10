This is a test / learning project to prototype a GraphQL - Express - Sequelize - Postgres application. It has been built deliberately using as few libraries as possible to enable understanding of the core libraries. Where possible, best practices have been used, but some notable features such as unit tests are missing. Known missing pieces are in the Issues section, please feel free to raise issues if there's something you'd like to see. 

Learning and best practices were taken from the following sources:

https://medium.com/@sam.chai0501/graphql-converting-my-node-express-sequelize-postgresql-back-end-24232e535fb9

https://blog.graph.cool/graphql-server-basics-the-schema-ac5e2950214e

https://blog.graph.cool/graphql-server-basics-the-network-layer-51d97d21861

https://hackernoon.com/creating-a-structured-hot-reloadable-graphql-api-with-express-js-de62c859643

https://hackernoon.com/graphql-tips-after-a-year-in-production-419341db52e3

https://blog.graph.cool/top-5-reasons-to-use-graphql-b60cfa683511

# Setup

1. Ensure you have the latest versions of [Node.js](https://nodejs.org/en/) and [npm](https://www.npmjs.com/) installed. 
2. Download and install version 10.3 of [Postgres](https://www.postgresql.org/). Use the default installation options, creating a database called `postgres` with user `postgres` that runs on port `5432`. If you wish to use other Postgres settings then modify the connection step inside `/src/db/db.mjs`.
3. Clone this repo, then navigate to it and run `npm i`.
4. Set your database password to the `PASS` environment variable => `export PASS={password}`
5. Run `npm start` to get going!
6. The GraphQL API will be running on `localhost:4000`, so navigate to `localhost:4000/graphql` to start using the API
7. If the web interface isn't your thing, the [Insomnia REST Client](https://insomnia.rest/) has great support for making and sotring GraphQL queries.

# Queries
Once the application is set up, a number of queries are possible. No data is initally populated in the database, so first you'll want to create some:

```
mutation {
  createUser(id: 1, firstName: "Some", lastName: "Name") {
    id
  }
}
```
```
mutation {
  createOrder(id: 1, title: "Apple", category: "Fruit", userId: 1) {
    id
  }
}
```
And so on.

Once you've created some data, you'll want to start querying it. To get back a list of all users:
```
{users {
  id,
  firstName,
  lastName
}}
```
Note that `id`, `firstName`, `lastName` are all optional - try playing around with the structure and order of this request and see what happens.

To get back users and their orders:

```
{users {
  id,
  firstName
  orders {
    id,
    title
  }
}}
```

To get back a specific user by their id, and see all their orders:

```
{user(id: 1) {
  id,
  firstName,
  orders {
    id,
    title
  }
}}
```
Or to filter their orders...

```
{user(id: 1) {
  id,
  firstName,
  orders(category: "Fruit") {
    id,
    title
  }
}}
```

As you can see, even in this simple example, the ways to query the API are very flexible and powerful. Have a play with some other queries and see what you can create.

# Storage Layer
This application is currently built with Postgres as the storage layer. However, GraphQL allows you the flexibility to easily switch this out for some other layer - simply change the contents of the db folder to your desired storage, then update the Order and User Resolver files to make use of this new storage layer - the API will continue to function in the same way!

Please feel free to leave any comments or suggestions on how to improve this resource. I'll be continuing to update and improve it over time.