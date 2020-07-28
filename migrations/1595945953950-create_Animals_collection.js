const { client, q } = require("../helpers/db");

module.exports.up = async () => {
  return client.query(q.CreateCollection({ name: "Animals" }));
};

module.exports.down = async () => {
  return client.query(q.Delete(q.Collection("Animals")));
};
