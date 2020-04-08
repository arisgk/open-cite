import Source from '../source';

export default class JournalArticle extends Source {
  constructor({
    id,
    title,
    subtitle,
    authors,
    yearPublished,
    industryIdentifiers,
    journal,
    volume,
    issue,
    pageCount,
  }) {
    super({ id, title, subtitle, authors, yearPublished, industryIdentifiers });

    this.journal = journal;
    this.volume = volume;
    this.issue = issue;
    this.pageCount = pageCount;
  }
}
