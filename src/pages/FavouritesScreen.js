import { Box, Container, Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { useSelector } from "react-redux";
import MovieCard from "../components/MovieCard";
import PageNavigation from "../components/PageNavigation";

export default function Favourites() {
  const { favouriteItems } = useSelector((state) => state.favouriteItems);
  const isFavourite = true;
  const [currentPage, setCurrentPage] = useState(0);
  const PER_PAGE = 5;
  var pageCount = 0;
  const listSize = favouriteItems.length;
  pageCount = Math.ceil(favouriteItems.length / PER_PAGE);

  const offset = currentPage * PER_PAGE;

  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }
  return (
    <>
      {/* <h1 alignItems="center">My Favourites</h1> */}

      <Container maxW="container.x1">
        <Flex justifyContent="center" alignItems="center">
          {favouriteItems.map((movie) => (
            <MovieCard key={movie.id} movie={movie} isFavourite={isFavourite} />
          ))}
        </Flex>
        {/* <Flex justifyContent="center" alignItems="center">
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
        </Flex> */}
        <PageNavigation listSize={listSize} />
      </Container>
    </>
  );
}
