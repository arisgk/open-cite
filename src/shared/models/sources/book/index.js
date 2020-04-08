import Source from '../source';

export default class Book extends Source {
  constructor({
    id,
    title,
    subtitle,
    authors,
    yearPublished,
    industryIdentifiers,
    publisher,
    pageCount,
    imageLinks,
    language,
  }) {
    super({ id, title, subtitle, authors, yearPublished, industryIdentifiers });

    this.publisher = publisher;
    this.pageCount = pageCount;
    this.imageLinks = imageLinks;
    this.language = language;
  }
}
