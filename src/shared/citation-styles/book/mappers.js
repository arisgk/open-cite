export const toCitationItem = book => ({
  type: 'book',
  id: book.id,
  title: book.title,
  publisher: book.publisher,
  author: book?.authors?.map(author => {
    // TODO: Fix this by separating first and last name in book author
    const parts = author?.split(' ');
    return {
      given: parts?.[0],
      family: parts?.[1],
    };
  }),
  ISBN: book?.industryIdentifiers?.find(
    identifier => identifier?.type === 'ISBN_13',
  )?.identifier,
  'number-of-pages': book.pageCount,
  issued: {
    'date-parts': [[book.yearPublished]],
  },
});
