/* global fetch */
import { toBook } from './mappers';

const defaultLimit = 10;

export const search = async (query, limit) => {
  const res = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${query}`,
  );

  const jsonRes = await res.json();

  const books = jsonRes.items?.map(toBook).filter(book => !!book) || [];

  return books.slice(0, limit || defaultLimit);
};
