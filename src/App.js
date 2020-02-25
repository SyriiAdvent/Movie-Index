import React, { useState } from "react";
import "./App.css";
import { Route, Switch, Link } from "react-router-dom";
import axios from "axios";

import { API_KEY, LANGUAGE } from './_vendor'
import TrendingMovies from './components/Trending/TrendingMovies'


function App() {
  const [language] = useState(LANGUAGE);

  return (
  <div className="App">
    <Switch>
      <Route path='/' >
        <TrendingMovies apikey={API_KEY} language={language} />
      </Route>
    </Switch>
  </div>
  );
}

export default App;
