import React from "react";
import { useSelector } from "react-redux";
import MovieItem from "../components/MovieItem";

export default function Favourites() {
  const { favouriteItems } = useSelector((state) => state.favouriteItems);
  const isFavourite = true;

  console.log("here");
  console.log(favouriteItems);

  return (
    <div>
      Favourites
      <div>
        {favouriteItems.map((movie) => (
          <MovieItem key={movie.id} movie={movie} isFavourite={isFavourite} />
        ))}
      </div>
    </div>
  );
}
