import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getMovies } from "../actions/movieActions";
import MovieItem from "../components/MovieItem";

export default function MovieList() {
  const moviesList = useSelector((state) => state.moviesList);
  const { loading, movies, error } = moviesList;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovies());
  }, []);

  return loading ? (
    <div>Loading ...</div>
  ) : error ? (
    <div>Error ...</div>
  ) : (
    <div>
      MovieList
      <div>
        {movies.map((movie) => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
