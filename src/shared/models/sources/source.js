export default class Source {
  constructor({
    id,
    title,
    subtitle,
    authors,
    yearPublished,
    industryIdentifiers,
  }) {
    this.id = id;
    this.title = title;
    this.subtitle = subtitle;
    this.authors = authors;
    this.yearPublished = yearPublished;
    this.industryIdentifiers = industryIdentifiers;
  }
}
