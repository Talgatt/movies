import { Box, Center, Container, Flex, Wrap, WrapItem } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { getGenre } from "../actions/movieActions";
import MovieCard from "../components/MovieCard";
import PageNavigation from "../components/PageNavigation";
import { getGenreNames } from "../utilities/utilities";

export default function Favourites() {
  const { favouriteItems } = useSelector((state) => state.favouriteItems);
  const isFavourite = true;
  const [currentPage, setCurrentPage] = useState(0);
  const genres = useSelector((state) => state.genres);
  const { allGenres } = genres;
  const PER_PAGE = 5;
  var pageCount = 0;
  // const listSize = favouriteItems.length;
  if (favouriteItems !== undefined) {
    pageCount = Math.ceil(favouriteItems.length / PER_PAGE);
  }

  const offset = currentPage * PER_PAGE;
  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGenre());
  }, []);
  return (
    <>
      {/* <h1 alignItems="center">My Favourites</h1> */}

      <Container maxW="container.x1">
        <Flex justifyContent="center" alignItems="center">
          <Wrap p={20} spacing="5rem" alignItems="center">
            {favouriteItems !== undefined &&
              favouriteItems
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
        {/* <PageNavigation listSize={listSize} /> */}
      </Container>
    </>
  );
}
