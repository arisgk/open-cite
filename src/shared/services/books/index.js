/* global fetch */
export const search = async (query, limit) => {
  const res = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${query}`,
  );

  const jsonRes = await res.json();

  // TODO: Use app-defined models and perform mapping here

  return jsonRes.items.slice(0, limit || 10);
};
