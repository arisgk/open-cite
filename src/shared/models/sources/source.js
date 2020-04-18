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
    this.authors = authors; // TODO: We need a model for author
    this.yearPublished = yearPublished;
    this.industryIdentifiers = industryIdentifiers;
  }
}
