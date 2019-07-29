import React, { Component } from 'react';
import MovieCard from '../MovieCard/MovieCard';
import MovieGrid from '../MovieGrid/MovieGrid';
import SearchBar from '../SearchBar/SearchBar';
import movies from '../../movies.json';

const filterFilm = (value, films) =>
  films.filter(film => film.title.toLowerCase().includes(value.toLowerCase()));

class App extends Component {
  state = { value: '' };

  handleInputChange = e => this.setState({ value: e.target.value });

  render() {
    const { value } = this.state;
    const filteredFilms = filterFilm(value, movies);
    return (
      <>
        <SearchBar handleInputChange={this.handleInputChange} value={value} />
        <MovieCard />
        <MovieGrid items={filteredFilms} />
      </>
    );
  }
}

export default App;
