import React from 'react';
import PropTypes from 'prop-types';
import css from '../../css/styles.module.css';
import MovieCard from '../MovieCard/MovieCard';

const MovieGrid = ({ items }) => (
  <ul className={css.movieGrid}>
    {items.map(item => (
      <li key={item.id}>
        <MovieCard {...item} />
      </li>
    ))}
  </ul>
);

MovieGrid.propTypes = {
  items: PropTypes.arrayOf().isRequired,
};

export default MovieGrid;
