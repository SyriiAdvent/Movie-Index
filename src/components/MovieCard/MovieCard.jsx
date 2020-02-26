import React, { useState, useEffect } from "react";
import axios from "axios";
import './MovieCard.css'

const MovieCard = props => {
  const movie = props.movies;
  const imageURL = `https://image.tmdb.org/t/p/original`;

  return (
    <div key={movie.id} className="movie-card">
      {console.log(movie)}
      <img src={`${imageURL}${movie.poster_path}`} alt=""/>
      <div className='card-details'>
        <h2>{movie.title}</h2>
        <p>Release Date: {movie.release_date}</p>
        <div className='desc'>
          <p>{movie.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
