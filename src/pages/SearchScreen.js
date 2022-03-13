import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "../components/MovieCard";

export default function SearchScreen(props) {
  const { searchList } = useSelector((state) => state.searchList);

  return (
    <div>
      Search Results
      <div>
        {searchList.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
