import React, { useEffect, useState } from 'react';
import axios from 'axios';

import MovieCard from '../MovieCard';

const TrendingMovies = props => {

  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    axios(
      // `https://api.themoviedb.org/3/movie/550?api_key=${API_KEY}${language}`
      `https://api.themoviedb.org/3/trending/all/day?api_key=${props.apikey}${props.language}`
    )
      .then(response => {
        console.log(response);
        setTrendingMovies(response.data.results)
      })
      .catch(error => console.error(`Couldn't retrieve a response...`, error));
  }, []);

  
  console.log(props);
  return (
    <div className='trending-movie-container'>
      {trendingMovies.map( el => <MovieCard movies={el} language={props.language}/> )}
    </div>
  )
}

export default TrendingMovies;