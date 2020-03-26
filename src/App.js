import React from "react";
import { Routes, Route } from "react-router-dom";

import NavBar from "./Components/Navigation/NavBar";
import NowPlaying from "./Components/NowPlaying/NowPlaying";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path='/' element={<NavBar />} /> */}
        <Route path='/' element={<NowPlaying />} />
      </Routes>
    </div>
  );
}

export default App;
