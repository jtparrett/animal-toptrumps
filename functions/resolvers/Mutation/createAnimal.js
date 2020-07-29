module.exports = async (root, { values }, { client, q }) => {
  const { name, type, diet, extinct } = values;

  await client.query(
    q.Create(q.Collection("Animals"), {
      data: {
        name,
        type,
        diet,
        extinct,
      },
    })
  );

  return true;
};
