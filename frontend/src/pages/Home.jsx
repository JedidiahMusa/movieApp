import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import "../css/Home.css";
import { searchMovies, getPopularMovies } from "../services/api";

function Home() {
  const [search, setSearch] = useState("");
  const [error, setError] = useState(null);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularmovies = await getPopularMovies();
        setMovies(popularmovies);
      } catch (error) {
        console.log(error);
        setError("There was an error loading the movies");
    
      } finally {
        setLoading(false);
      }
    };
    loadPopularMovies();
  }, []);

  function handleSearch(e) {
    e.preventDefault();
    alert(`Searching for ${search}`);
  }

  return (
    <div className="home">
      <form onSubmit={() => {}} className="search-form">
        <input
          type="text"
          className="search-input"
          placeholder="Search for movies"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit" className="search-button" onClick={handleSearch}>
          Search
        </button>
      </form>

      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}

export default Home;
