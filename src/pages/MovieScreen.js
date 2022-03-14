import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getMovie, getSimilar } from "../actions/movieActions";
import { Box, Image, Badge, Button, Flex, Container } from "@chakra-ui/react";
import LoadingBox from "../components/LoadingBox";
import Rating from "../components/Rating";
import Genre from "../components/Genre";
import MovieCard from "../components/MovieCard";

export default function Movie(props) {
  const { id } = useParams();
  const imageUrl = "https://image.tmdb.org/t/p/w500/";

  const dispatch = useDispatch();
  const movieDetails = useSelector((state) => state.movieDetails);
  const { loading, movie } = movieDetails;
  const similarList = useSelector((state) => state.similarList);
  const { loadingSimilar, similarMovies } = similarList;
  const recommendationsList = useSelector((state) => state.recommendationsList);
  const { recommendationsMovies } = recommendationsList;

  if (!loadingSimilar) {
    console.log("similar");
    console.log(similarMovies);
  }

  useEffect(() => {
    dispatch(getMovie(id));
    dispatch(getSimilar(id));
  }, [dispatch, id]);

  return (
    <div>
      {loading ? (
        <LoadingBox />
      ) : (
        <div>
          <Flex className="card_extended">
            <MovieCard key={movie.id} movie={movie} />
            <Box>
              <Box as="span" color="gray.600" fontSize="sm">
                {/* {movie.genres
                        ? movie.genres.map((genre) => (
                            <span key={genre.id}>{genre.name}</span>
                          ))
                        : "N/A"} */}
                <p>{movie.genres.map((genre) => genre.name).join(", ")}</p>
              </Box>
            </Box>
            <Container maxW="2xl" centerContent>
              <Box padding="4" color="black" maxW="md">
                {movie.overview}
              </Box>
            </Container>
            <Flex
              border-radius="1rem"
              maxW="90%"
              p={10}
              style={{ backgroundColor: "white", margin: 10 }}
            >
              <Flex
                maxH={200}
                style={{
                  overflowX: "scroll",
                  border: "2px solid white",
                  background: "white",
                }}
              >
                {!loadingSimilar &&
                  similarMovies.map((movie) => {
                    return (
                      <MovieCard
                        key={movie.id}
                        movie={movie}
                        width={100}
                        maxH={200}
                      />
                    );
                  })}
              </Flex>
            </Flex>
          </Flex>
        </div>
      )}
    </div>
  );
}
