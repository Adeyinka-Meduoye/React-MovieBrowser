import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Search from "./components/Search";
import Movie from "./components/Movie";
import { Routes, Route } from "react-router-dom";
import PageNotFound from "./components/PageNotFound";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    if (searchText) {
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=1b54e0741c58fcf3d50261b235e31fc9&
    language=en-US&query=${searchText}&page=1&include_adult=false`)
        .then((response) => response.json())
        .then((data) => {
          setSearchResults(data.results);
        });
    }
  }, [searchText]);

  return (
    <div className="App">
      <Navbar searchText={searchText} setSearchText={setSearchText} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route
          path="search"
          element={
            <Search keyword={searchText} searchResults={searchResults} />
          }
        />
        <Route path="movie/:id" element={<Movie />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
