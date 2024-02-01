export const getNextId = (data) => {
  const maxId = data.reduce((prev, current) =>
    prev && prev > current.id ? prev : current.id
  );

  return maxId + 1;
};
