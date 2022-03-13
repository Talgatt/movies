import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { searchMovies } from "../actions/movieActions";
import MovieCard from "../components/MovieCard";

export default function SearchScreen(props) {
  const searchList = useSelector((state) => state.searchList);
  const { loading, searchResult } = searchList;
  const { query } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchMovies(query));
  }, []);

  return loading ? (
    <div>Loading ...</div>
  ) : (
    <div>
      Search Results
      <div>
        {searchResult.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
