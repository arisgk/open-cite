export const formatPublicationInfo = book => {
  if (book.publisher && book.yearPublished) {
    return `${book.publisher}, ${book.yearPublished}`;
  }

  if (book.publisher) {
    return book.publisher;
  }

  if (book.yearPublished) {
    return book.yearPublished;
  }

  return '';
};
