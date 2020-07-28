module.exports = async (root, { id }, { client, q }) => {
  return client.query(
    q.Let(
      {
        doc: q.Get(q.Ref(q.Collection("Animals"), id)),
      },
      q.Merge(
        {
          id: q.Select(["ref", "id"], q.Var("doc")),
        },
        q.Select(["data"], q.Var("doc"))
      )
    )
  );
};
