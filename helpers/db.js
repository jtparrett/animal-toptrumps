const faunadb = require("faunadb");
const q = faunadb.query;

const { FAUNADB_SECRET } = process.env;

if (!FAUNADB_SECRET) {
  throw new Error("No FAUNADB_SECRET found.");
}

const client = new faunadb.Client({ secret: FAUNADB_SECRET });

module.exports = { client, q };
