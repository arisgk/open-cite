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
      {results.map(result => (
        <li key={result.id} className={classes.itemContainer}>
          {result &&
            result.volumeInfo &&
            result.volumeInfo.imageLinks &&
            result.volumeInfo.imageLinks.smallThumbnail && (
              <img
                src={result.volumeInfo.imageLinks.smallThumbnail}
                className={classes.image}
              />
            )}
          <div className={classes.infoContainer}>
            <p className={classes.title}>{result.volumeInfo.title}</p>
            {result && result.volumeInfo && result.volumeInfo.authors && (
              <p className={classes.author}>
                {result.volumeInfo.authors.join(', ')}
              </p>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
};

export default SearchResults;
