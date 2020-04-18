/* global XMLHttpRequest */
import CSL from 'citeproc';
import { toCitationItem as toBookCitationItem } from './book/mappers';

const getStyle = () => {
  const xhr = new XMLHttpRequest();
  xhr.open(
    'GET',
    `https://raw.githubusercontent.com/citation-style-language/styles/master/chicago-author-date.csl`,
    false,
  );
  xhr.send(null);
  return xhr.responseText;
};

export const renderBookCitation = book => {
  // TODO: Update this test implementation by figuring out exactly how the citeproc-js processor works
  const sys = {
    retrieveLocale: lang => {
      const xhr = new XMLHttpRequest();
      xhr.open(
        'GET',
        `https://raw.githubusercontent.com/Juris-M/citeproc-js-docs/master/locales-${lang}.xml`,
        false,
      );
      xhr.send(null);
      return xhr.responseText;
    },
    retrieveItem: () => toBookCitationItem(book),
  };

  const style = getStyle();

  const citeproc = new CSL.Engine(sys, style);

  const citation = {
    citationItems: [
      {
        id: book.id,
      },
    ],
    properties: {
      noteIndex: 0,
    },
  };

  const result = citeproc.processCitationCluster(citation, [], []);

  return result?.[1]?.[0]?.[1];
};
