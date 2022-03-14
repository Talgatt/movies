import { Container, Flex, Wrap } from "@chakra-ui/react";
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
      <Container maxW="container.x1">
        <Flex justifyContent="center" alignItems="center">
          <Wrap p={20} spacing="5rem" alignItems="center">
            {searchResult.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </Wrap>
        </Flex>
      </Container>
    </div>
  );
}
