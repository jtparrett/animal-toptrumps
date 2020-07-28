module.exports = async (root, { animal }, { client, q }) => {
  const { name, type, diet, extinct } = animal;

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
