const { ApolloServer } = require("apollo-server-lambda");
const faunadb = require("faunadb");
const q = faunadb.query;

const { FAUNADB_SECRET } = process.env;
const resolvers = require("./resolvers");
const typeDefs = require("./schema");

if (!FAUNADB_SECRET) {
  throw new Error("No FAUNADB_SECRET found.");
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => {
    const client = new faunadb.Client({ secret: FAUNADB_SECRET });

    return {
      client,
      q,
    };
  },
});

exports.handler = server.createHandler({
  cors: {
    origin: "*",
    credentials: true,
  },
});
