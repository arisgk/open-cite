import React, { useState, useEffect, useRef } from 'react';
import { throttle } from 'lodash';
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

  const throttledSearch = useRef(
    throttle(query => searchBooks(query, 10), 200),
  );

  // Based on:
  // -- https://codesandbox.io/s/jvvkoo8pq3 (code from official React documentation)
  // -- https://stackoverflow.com/questions/54666401/how-to-use-throttle-or-debounce-with-react-hook
  useEffect(() => {
    if (!input) {
      setResults([]);
      return undefined;
    }

    let ignore = false;

    const performThrottledSearch = async () => {
      const res = await throttledSearch.current(input);
      if (!ignore) setResults(res);
    };

    performThrottledSearch();

    return () => {
      ignore = true;
      throttledSearch.current.cancel();
    };
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
