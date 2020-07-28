module.exports = async (root, args, { client, q }) => {
  const { data } = await client.query(
    q.Map(
      q.Paginate(q.Documents(q.Collection("Animals"))),
      q.Lambda(
        "ref",
        q.Let(
          {
            doc: q.Get(q.Var("ref")),
          },
          q.Merge(
            {
              id: q.Select(["ref", "id"], q.Var("doc")),
            },
            q.Select(["data"], q.Var("doc"))
          )
        )
      )
    )
  );

  return data;
};
