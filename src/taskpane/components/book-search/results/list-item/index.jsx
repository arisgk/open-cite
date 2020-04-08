import React from 'react';
import { createUseStyles } from 'react-jss';
import styles from './styles';

const useStyles = createUseStyles(styles);

const ListItem = ({ item }) => {
  const classes = useStyles();

  return (
    <li className={classes.container}>
      {item?.volumeInfo?.imageLinks?.smallThumbnail && (
        <div className={classes.imageContainer}>
          <img
            src={item.volumeInfo.imageLinks.smallThumbnail}
            className={classes.image}
            alt=""
          />
        </div>
      )}
      <div className={classes.infoContainer}>
        <p className={classes.title}>{item.volumeInfo.title}</p>
        {item?.volumeInfo?.authors && (
          <p className={classes.author}>{item.volumeInfo.authors.join(', ')}</p>
        )}
      </div>
    </li>
  );
};

export default ListItem;
