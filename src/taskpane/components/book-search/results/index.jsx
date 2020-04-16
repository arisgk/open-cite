import React from 'react';
import { createUseStyles } from 'react-jss';
import { addBookCitation } from 'shared/word';
import Book from './book';
import styles from './styles';

const useStyles = createUseStyles(styles);

const SearchResults = ({ results }) => {
  const classes = useStyles();

  if (!results || (results && results.length === 0)) {
    return null;
  }

  const handleResultClick = result => () => addBookCitation(result);

  return (
    <ol className={classes.list}>
      {results.map(result => (
        <li key={result.id}>
          <Book book={result} onSelect={handleResultClick(result)} />
        </li>
      ))}
    </ol>
  );
};

export default SearchResults;
