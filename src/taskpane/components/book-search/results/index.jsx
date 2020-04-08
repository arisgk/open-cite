import React from 'react';
import { createUseStyles } from 'react-jss';
import ListItem from './list-item';
import styles from './styles';

const useStyles = createUseStyles(styles);

const SearchResults = ({ results }) => {
  const classes = useStyles();

  if (!results || (results && results.length === 0)) {
    return null;
  }

  return (
    <ol className={classes.list}>
      {results.map(result => (
        <li key={result.id}>
          <ListItem item={result} />
        </li>
      ))}
    </ol>
  );
};

export default SearchResults;
