import React, { useState, useEffect } from "react";
import axios from "axios";
// import './MovieCard.css'

const MovieCard = props => {
  const movie = props.movies;
  const imageURL = `https://image.tmdb.org/t/p/original`;
  // const [posterImages, setPosterImages] = useState([]);

  // useEffect(() => {
  //   axios(
  //     `https://api.themoviedb.org/3/movie/${movie.id}/images?api_key=${props.apikey}${props.language}&include_image_language=en`
  //   ).then(response => {
  //     // console.log(response);
  //     setPosterImages(response.data);
  //   });
  // }, []);

  // const posterHandler = () => {
  //   if (posterImages.length > 0) {
  //     return <img src={`${imageURL}${posterImages[0].posters[0]}`} alt="" />;
  //   } else {
  //     return <img src={`${imageURL}${posterImages.posters}`} alt="" />;
  //   }
  // };

  return (
    <div key={movie.id} className="movie-card">
      {/* {console.log(posterImages.posters)} */}
      <img src={`${imageURL}${movie.poster_path}`} alt=""/>
      <h2>{movie.title}</h2>
      <p>Release Date: {movie.release_date}</p>
    </div>
  );
};

export default MovieCard;
