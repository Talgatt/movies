import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "../components/MovieCard";

export default function Favourites() {
  const { favouriteItems } = useSelector((state) => state.favouriteItems);
  const isFavourite = true;

  return (
    <div>
      Favourites
      <div>
        {favouriteItems.map((movie) => (
          <MovieCard key={movie.id} movie={movie} isFavourite={isFavourite} />
        ))}
      </div>
    </div>
  );
}
