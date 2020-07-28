module.exports = async (root, { id }, { client, q }) => {
  await client.query(q.Delete(q.Ref(q.Collection("Animals"), id)));

  return true;
};
