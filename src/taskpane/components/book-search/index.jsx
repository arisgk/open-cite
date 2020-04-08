import React, { useState, useEffect } from 'react';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { createUseStyles } from 'react-jss';
import { search as searchBooks } from 'services/books';
import Results from './results';
import styles from './styles';

const useStyles = createUseStyles(styles);

const BookSearch = () => {
  const classes = useStyles();
  const [input, setInput] = useState('');
  const [results, setResults] = useState([]);

  const performSearch = async query => {
    const res = await searchBooks(query, 10);
    setResults(res);
  };

  useEffect(() => {
    if (input === '') {
      setResults([]);
      return undefined;
    }

    // TODO: Use throttle here
    // Example: https://material-ui.com/components/autocomplete/#google-maps-place
    performSearch(input);
  }, [input]);

  const handleChange = (_, newValue) => setInput(newValue);

  return (
    <div className={classes.container}>
      <TextField
        label="Search for a book"
        value={input}
        onChange={handleChange}
      />
      <Results results={results} />
    </div>
  );
};

export default BookSearch;
