import React from 'react';

const MovieList = (props) => (
  <>
    {props.movies.map((movie, index) => (
      <div className="image-container d-flex justify-content-start m-3">
        <img src={movie.Poster} alt="movie" />
        <div className="overlay d-flex align-items-center justify-content-center"></div>
      </div>
    ))}
  </>
);

export default MovieList;
