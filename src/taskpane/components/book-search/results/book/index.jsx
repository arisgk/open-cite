import React from 'react';
import classNames from 'classnames';
import { createUseStyles } from 'react-jss';
import { formatPublicationInfo } from './helpers';
import styles from './styles';

const useStyles = createUseStyles(styles);

const ListItem = ({ book, onSelect }) => {
  const classes = useStyles();

  return (
    <div className={classes.container} onClick={onSelect}>
      {book?.imageLinks?.smallThumbnail && (
        <div className={classes.imageContainer}>
          <img
            src={book.imageLinks.smallThumbnail}
            className={classes.image}
            alt=""
          />
        </div>
      )}
      <div className={classes.infoContainer}>
        <p className={classNames(classes.infoItem, classes.title)}>
          {book.title}
        </p>
        {book.authors?.length > 0 && (
          <p className={classes.infoItem}>{book.authors.join(', ')}</p>
        )}
        {(book.publisher || book.yearPublished) && (
          <p className={classes.infoItem}>{formatPublicationInfo(book)}</p>
        )}
      </div>
    </div>
  );
};

export default ListItem;
