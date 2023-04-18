import React, { useState, useEffect } from 'react';
import MovieCard from '../MovieCard/MovieCard';
import starwarslogo from "../assets/starwarslogo.svg";

function MovieList() {
    
  const [movies, setMovies] = useState([]);
  console.log('movies:', movies);

  useEffect(() => {
    fetch('https://swapi.dev/api/films')
      .then(response => response.json())
      .then(data => setMovies(data.results))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="movie-list">
    <img className='starwars-img' src={starwarslogo} alt="Logo" />
    <div className="movie-container">
      {movies.map(movie => (
        <MovieCard key={movie.episode_id} movie={movie} />
      ))}
    </div>
    </div>
  );
}

export default MovieList;
