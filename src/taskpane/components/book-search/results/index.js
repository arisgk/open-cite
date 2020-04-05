import React from 'react';
import { createUseStyles } from 'react-jss';
import styles from './styles';

const useStyles = createUseStyles(styles);

const SearchResults = ({ results }) => {
  const classes = useStyles();

  if (!results || (results && results.length === 0)) {
    return null;
  }

  return (
    <ol className={classes.list}>
      {results.map((result) => (
        <li key={result.id}>
          {/* <img
            src={result.volumeInfo.imageLinks.smallThumbnail}
            className={classes.image}
          /> */}
          <div>
            <p>{result.volumeInfo.title}</p>
            {/* {result.volumeInfo && result.volumeInfo.authors && (
              <p>{result.volumeInfo.authors.link(', ')}</p>
            )} */}
          </div>
        </li>
      ))}
    </ol>
  );
};

export default SearchResults;
