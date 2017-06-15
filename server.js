/*
    ================ server.js ==================	
*/

const express = require('express'),
  graphqlHTTP = require('express-graphql'),
  schema = require('./src/schema.js');

let port = 3000;
const app = express();
app.use('/', graphqlHTTP({
  schema: schema,
  graphiql: true //set to false if you don't want graphiql enabled
}));

app.listen(port);
console.log('GraphQL API server running at localhost:'+ port);
