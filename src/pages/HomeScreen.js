import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getGenre, getMovies } from "../actions/movieActions";
import ReactPaginate from "react-paginate";
import MovieCard from "../components/MovieCard";
import { Box, Center, Container, Flex, Wrap, WrapItem } from "@chakra-ui/react";
import { getGenreNames } from "../utilities/utilities";

export default function MovieList(props) {
  const PER_PAGE = 5;
  const moviesList = useSelector((state) => state.moviesList);
  const [currentPage, setCurrentPage] = useState(0);
  const { loading, movies } = moviesList;

  const genres = useSelector((state) => state.genres);
  const { allGenres } = genres;

  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }
  var listSize = 0;
  var pageCount = 0;
  if (!loading) {
    listSize = movies.length;
    pageCount = Math.ceil(movies.length / PER_PAGE);
  }
  const offset = currentPage * PER_PAGE;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovies("top_rated"));
    dispatch(getGenre());
  }, []);

  // function getGenreNames(allGenres, res) {
  //   const gNames = [];
  //   if (allGenres !== undefined) {
  //     allGenres.map((genre) => {
  //       if (res.hasOwnProperty("genre_ids")) {
  //         res.genre_ids.map((id) => {
  //           if (Number(id) === Number(genre.id)) {
  //             if (gNames.indexOf(genre.name) == -1) {
  //               gNames.push(genre);
  //             }
  //           }
  //         });
  //       }
  //     });
  //   }

  //   return gNames;
  // }

  return loading ? (
    <div>Loading ...</div>
  ) : (
    <div>
      <Container maxW="container.x1">
        <Flex justifyContent="center" alignItems="center">
          <Wrap p={20} spacing="5rem" alignItems="center">
            {movies !== undefined &&
              movies.slice(offset, offset + PER_PAGE).map((res, index) => {
                if (typeof res !== "undefined") {
                  return (
                    <WrapItem key={res.id}>
                      <Center key={res.id}>
                        <MovieCard
                          key={res.id}
                          movie={res}
                          genre={getGenreNames(allGenres, res)}
                        />
                      </Center>
                    </WrapItem>
                  );
                }
              })}
          </Wrap>
        </Flex>
      </Container>

      <Flex justifyContent="center" alignItems="center">
        <Box p={10} alignItems="center">
          <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={handlePageClick}
            containerClassName={"pagination"}
            previousLinkClassName={"pagination__link"}
            nextLinkClassName={"pagination__link"}
            disabledClassName={"pagination__link--disabled"}
            activeClassName={"pagination__link--active"}
          />
        </Box>
      </Flex>

      {/* <PageNavigation listSize={listSize} /> */}
    </div>
  );
}
