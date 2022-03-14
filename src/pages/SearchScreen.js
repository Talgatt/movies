import { Box, Center, Container, Flex, Wrap, WrapItem } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getGenre, searchMovies } from "../actions/movieActions";
import MovieCard from "../components/MovieCard";
import { getGenreNames } from "../utilities/utilities";

export default function SearchScreen(props) {
  const searchList = useSelector((state) => state.searchList);
  const { loading, searchResult } = searchList;
  const { query } = useParams();
  const dispatch = useDispatch();
  const PER_PAGE = 8;
  const [currentPage, setCurrentPage] = useState(0);
  const genres = useSelector((state) => state.genres);
  const { allGenres } = genres;

  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }
  var listSize = 0;
  var pageCount = 0;
  if (!loading) {
    listSize = searchResult.length;
    pageCount = Math.ceil(searchResult.length / PER_PAGE);
  }
  const offset = currentPage * PER_PAGE;

  useEffect(() => {
    dispatch(searchMovies(query));
    dispatch(getGenre());
  }, []);

  return loading ? (
    <div>Loading ...</div>
  ) : (
    <div>
      <Container maxW="container.x1">
        <Flex justifyContent="center" alignItems="center">
          <Wrap p={20} spacing="5rem" alignItems="center">
            {searchResult !== undefined &&
              searchResult
                .slice(offset, offset + PER_PAGE)
                .map((res, index) => {
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
      </Container>
    </div>
  );
}
