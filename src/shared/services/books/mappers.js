import moment from 'moment';
import IndustryIdentifier from 'models/sources/industry-identifier';
import Book from 'models/sources/book';
import ImageLinks from 'models/sources/book/image-links';

export const toBook = apiBook => {
  if (!apiBook) return null;

  const industryIdentifiers =
    apiBook.volumeInfo?.industryIdentifiers?.map(
      identifier =>
        new IndustryIdentifier({
          type: identifier.type,
          identifier: identifier.identifier,
        }),
    ) || [];

  const imageLinks = new ImageLinks({
    smallThumbnail: apiBook.volumeInfo?.imageLinks?.smallThumbnail || '',
    thumbnail: apiBook.volumeInfo?.imageLinks?.thumbnail || '',
  });

  const yearPublished = moment(apiBook?.volumeInfo?.publishedDate).format(
    'YYYY',
  );

  return new Book({
    id: apiBook.id,
    title: apiBook?.volumeInfo?.title || '',
    subtitle: apiBook?.volumeInfo?.subtitle || '',
    authors: apiBook?.volumeInfo?.authors || [],
    yearPublished,
    industryIdentifiers,
    publisher: apiBook?.volumeInfo?.publisher,
    pageCount: apiBook?.volumeInfo?.pageCount,
    imageLinks,
    language: apiBook?.volumeInfo?.language || '',
  });
};
