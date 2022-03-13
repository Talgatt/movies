import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getGenre } from "../actions/movieActions";

export default function Genre(props) {
  const { genre_ids } = props;
  const genres = useSelector((state) => state.genres);
  const { loading, genre } = genres;
  const [genreName, setGenreName] = useState("");

  const genresArr = [];

  //   const getGenreNames = (genre_ids) =>{
  //       genre.filter(genre_ids)
  //   }

  // genre.forEach((id) =>{
  //     if(id == )
  // } )

  //   genre_ids.forEach((id) => {
  //     genresArr.push(
  //       genre.filter((x) => {
  //         if (x.id == id) return x.name;
  //       })
  //     );
  //   });

  //const {genre}
  console.log("genre ids");
  console.log(genre_ids);
  if (!loading) {
    console.log(genre);
  }

  //   useEffect(() => {
  //     console.log("genre 133");
  //     dispatch(getGenre);
  //   }, [dispatch]);

  const dispatch = useDispatch();
  useEffect(() => {
    console.log("genre 133");
    dispatch(getGenre());
    // setMovies(movies);
  }, []);

  return (
    <div>
      {/* {genres
        ? movie.genres.map((genre) => <span key={genre.id}>{genre.name}</span>)
        : "N/A"} */}
    </div>
  );
}
