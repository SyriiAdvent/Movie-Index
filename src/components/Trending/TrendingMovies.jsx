import React, { useEffect, useState } from 'react';
import axios from 'axios';

import MovieCard from '../MovieCard';

const TrendingMovies = props => {
  const popularURL = `https://api.themoviedb.org/3/movie/popular?api_key=${props.apikey}${props.language}`

  const [trendingMovies, setTrendingMovies] = useState([]);
  const [page, setPage] = useState('1')

  useEffect(() => {
    axios(
      // `https://api.themoviedb.org/3/movie/550?api_key=${API_KEY}${language}`
      // `https://api.themoviedb.org/3/trending/all/day?api_key=${props.apikey}${props.language}`
      `${popularURL}${props.apikey}${props.language}&page=${page}`
    )
      .then(response => {
        console.log(response);
        setTrendingMovies(response.data.results)
      })
      .catch(error => console.error(`Couldn't retrieve a response...`, error));
  }, [page]);

  
  console.log(props);
  return (
    <div className='trending-movie-container'>
      <button onClick={() => setPage(`${+page + 1}`)}>NextPage</button>
      {trendingMovies.map( el => <MovieCard movies={el} language={props.language} apikey={props.apikey}/> )}
    </div>
  )
}

export default TrendingMovies;