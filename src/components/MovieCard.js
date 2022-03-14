import React, { useState, useEffect } from "react";
import { Box, Image, Badge, Button } from "@chakra-ui/react";
import { StarIcon, PhoneIcon, AddIcon, WarningIcon } from "@chakra-ui/icons";
import { useDispatch } from "react-redux";
import {
  addToFavourite,
  removeFromFavourite,
} from "../actions/favouriteActions";
import { useSelector } from "react-redux";
import Genre from "./Genre";

export default function MovieCard(props) {
  const { movie } = props;
  const { favouriteItems } = useSelector((state) => state.favouriteItems);
  const genres = useSelector((state) => state.genres);

  const imageUrl = "https://image.tmdb.org/t/p/w500/";
  const [favourites, setFavourites] = useState([]);
  const dispatch = useDispatch();
  var isFavourite = false;

  if (favouriteItems !== undefined) {
    favouriteItems.forEach((x) => {
      if (x.id === movie.id) {
        isFavourite = true;
      }
    });
  }

  const addFavoriteMovieHandler = (e) => {
    e.preventDefault();
    dispatch(addToFavourite(movie));
  };

  const deleteFavoriteMovieHandler = (e) => {
    e.preventDefault();
    dispatch(removeFromFavourite(movie.id));
  };

  useEffect(() => {}, []);

  return (
    <div>
      <Box overflow="hidden">
        <a href={`/movie/${movie._id || movie.id}`}>
          <Image
            // className="poster"
            className="poster__img"
            src={`${imageUrl}${movie.poster_path}`}
            alt="no image"
          />
        </a>
        <Box p="6">
          <Box display="flex" alignItems="baseline">
            <Badge borderRadius="full" px="2" colorScheme="teal">
              {movie.original_language}
            </Badge>
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              ml="2"
            ></Box>
          </Box>
          <a href={`/movie/${movie._id || movie.id}`}>
            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              {movie.title}
            </Box>
          </a>
          <Box>
            <Box as="span" color="gray.600" fontSize="sm">
              {movie.release_date}
            </Box>
          </Box>

          <Box display="flex" mt="2" alignItems="center">
            {Array(10)
              .fill("")
              .map((_, i) => (
                <StarIcon
                  key={i}
                  color={i < movie.vote_average ? "teal.500" : "gray.300"}
                />
              ))}
            <Box as="span" ml="2" color="gray.600" fontSize="sm">
              {movie.vote_count} votes
            </Box>
          </Box>
          {!isFavourite && (
            <Box>
              <Button onClick={addFavoriteMovieHandler}>
                Add To Favorites
              </Button>
            </Box>
          )}
          {isFavourite && (
            <Box>
              <Button onClick={deleteFavoriteMovieHandler}>
                Delete From Favorites
              </Button>
            </Box>
          )}
        </Box>
      </Box>
    </div>
  );
}
