import React from 'react';

function MovieCard({ movie }) {
//   const backgroundImage = movie ? `url(images/${movie.title}.jpg)` : '';
//   console.log('movie:', movie);
  return (
    <div
      className="movie-card"
    //   style={{ backgroundImage }}
    >
      <div className="movie-info">
        <h2>{movie.title}</h2>
        <p>Release Date: {movie.release_date}</p>
        <p>{movie.opening_crawl}</p>
        <a href="#" className="more-info">More Info</a>
      </div>
    </div>
  );
}

export default MovieCard;
