import React, { useEffect } from "react";
import "./App.css";
import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";
//97432db

const API_URL = "http://www.omdbapi.com?apikey=97432db";

const App = () => {
  const [movies, setMovies] = React.useState([]);
  const [search, setSearch] = React.useState("");
  const searchMovies = async (title) => {
    const res = await fetch(`${API_URL}&s=${title}`);
    const data = await res.json();
    setMovies(data.Search);
  };
  useEffect(() => {
    searchMovies(search);
  }, []);

  return (
    <div className="app">
      <h1>Movies</h1>

      <div className="search">
        <input
          type="text"
          placeholder="Search for a movie"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => {
            searchMovies(search);
          }}
        />
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie1={movie} key={movie.imdbID} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No Movies Found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
