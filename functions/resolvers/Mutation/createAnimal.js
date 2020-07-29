module.exports = async (root, { values }, { client, q }) => {
  const { name, type, diet, extinct } = values;

  return client.query(
    q.Let(
      {
        doc: q.Create(q.Collection("Animals"), {
          data: {
            name,
            type,
            diet,
            extinct,
          },
        }),
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
