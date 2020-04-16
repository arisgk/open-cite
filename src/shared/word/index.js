/* global Word */

export const addBookCitation = async book =>
  Word.run(async context => {
    context.document.body.insertText(book.title, Word.InsertLocation.end);
    await context.sync();
  });
