import React, { useState, useEffect } from "react";
import { Box, Image, Badge, Button } from "@chakra-ui/react";
import { StarIcon, PhoneIcon, AddIcon, WarningIcon } from "@chakra-ui/icons";

export default function MovieItem(props) {
  const { movie } = props;
  const imageUrl = "https://image.tmdb.org/t/p/w500/";
  const [favourites, setFavourites] = useState([]);

  const addFavoriteMovie = () => {
    console.log("movei");
    console.log(movie);

    const newFavouriteList = [...favourites];
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };

  const saveToLocalStorage = (items) => {
    // console.log("test");
    //localStorage.getItem("react-movie-app-favourites", JSON.stringify(items));
    localStorage.setItem("react-movie-app-favourites", JSON.stringify(items));
  };

  useEffect(() => {
    const movieFavourites = JSON.parse(
      localStorage.getItem("react-movie-app-favourites")
    );
    console.log("fdfd");
    console.log(movieFavourites);
    setFavourites(movieFavourites);
  }, []);

  return (
    <div>
      <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Image src={`${imageUrl}${movie.poster_path}`} alt="no image" />

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

          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
          >
            {movie.title}
          </Box>

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
          <Box>
            <Button onClick={addFavoriteMovie} movie={movie}>
              Add To Favorites
            </Button>
          </Box>
        </Box>
      </Box>
    </div>
  );
}
