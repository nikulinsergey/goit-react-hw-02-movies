import React from 'react';
import PropTypes from 'prop-types';
import css from '../../css/styles.module.css';

const MovieCard = ({ id, title, posterUrl, overview }) => (
  <div key={id} className={css.movieCard}>
    <img src={posterUrl} alt="" />
    <div className={css.content}>
      <h2 className={css.title}>{title}</h2>
      <p className={css.descr}>{overview}</p>
    </div>
  </div>
);

MovieCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  posterUrl: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
};

export default MovieCard;
