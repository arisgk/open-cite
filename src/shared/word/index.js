/* global Word */
import { renderBookCitation } from 'shared/citation-styles';

export const addBookCitation = async book =>
  Word.run(async context => {
    context.document.body.insertText(
      renderBookCitation(book),
      Word.InsertLocation.end,
    );
    await context.sync();
  });
