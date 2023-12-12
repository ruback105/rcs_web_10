import { useEffect, useState } from "react";
import getMovieList from "../api/getMovieList";
import MovieCard from "../components/MovieCard";

function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [params, setParams] = useState({});

  useEffect(() => {
    getMovieList(params).then(setMovies);
  }, [params]);

  return (
    <>
      <form>
        <label htmlFor="sort_by">Sort by</label>
        <select
          name="sort_by"
          id="sort_by"
          value={params.sort_by}
          onChange={(event) => {
            setParams((prev) => ({
              ...prev,
              [event.target.name]: event.target.value,
            }));
          }}
        >
          <option value="popularity.desc">Popularity</option>
          <option value="revenue.desc">Revenue</option>
          <option value="vote_count.desc">Vote count</option>
        </select>
        <button
          type="button"
          onClick={() => {
            getMovieList(params).then(setMovies);
          }}
        >
          Search
        </button>
      </form>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {movies.map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </div>
    </>
  );
}

export default MoviesPage;
