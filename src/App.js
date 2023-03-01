import React, { createContext, useState } from "react";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import NavBar from "./Components/NavBar/NavBar";
import RowPost from "./Components/RowPost/RowPost";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { PopularMovies, Originals, LatestMovies } from "./Constants/urls";
import Details from "./Components/Details/Details";
const MovieContext = createContext();

function App() {
  const [url, setUrl] = useState([]);
  return (
    <div className="App">
      <MovieContext.Provider value={[url, setUrl]}>
        <NavBar />
        <Banner />
        <Routes>
          <Route
            index
            element={<RowPost url={Originals} title="Fern Movies" />}
          />
          <Route
            path="/popularmovies"
            element={<RowPost url={PopularMovies} title="Popular Movies" />}
          />
          <Route
            path="/latestmovies"
            element={<RowPost url={LatestMovies} title="Latest Movies" />}
          />
          <Route path="details/:id" element={<Details />} />
        </Routes>
      </MovieContext.Provider>
    </div>
  );
}

export default App;
export { MovieContext };
