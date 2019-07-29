import React from 'react';
import PropTypes from 'prop-types';
import css from '../../css/styles.module.css';

const SearchBar = ({ value, handleInputChange }) => (
  <input
    type="text"
    value={value}
    onChange={e => handleInputChange(e)}
    className={css.input}
  />
);

SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
};

export default SearchBar;
