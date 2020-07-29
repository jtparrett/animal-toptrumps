module.exports = async (root, { id, values }, { client, q }) => {
  const { name, type, diet, extinct } = values;

  return client.query(
    q.Let(
      {
        doc: q.Update(q.Ref(q.Collection("Animals"), id), {
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
          id,
        },
        q.Select(["data"], q.Var("doc"))
      )
    )
  );
};
