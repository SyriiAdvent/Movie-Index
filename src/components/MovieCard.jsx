import React from 'react'

const MovieCard = props => {
  const movie = props.movies

  return (
    <div key={movie.id} className="movie-card">
      {console.log(movie)}
      <h2>{movie.title}</h2>
      <p>Release Date: {movie.release_date}</p>
    </div>
  )
}

export default MovieCard