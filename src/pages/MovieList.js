import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getMovies } from "../actions/movieActions";
import ReactPaginate from "react-paginate";
import MovieItem from "../components/MovieItem";
import { Center, Wrap, WrapItem } from "@chakra-ui/react";

export default function MovieList(props) {
  const PER_PAGE = 4;
  const moviesList = useSelector((state) => state.moviesList);
  const [movieData, setMovieData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const [searchQuery, setSearchQuery] = useState("");
  const { loading, movies, error } = moviesList;

  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }

  var pageCount = 0;
  if (!loading) {
    pageCount = Math.ceil(movies.length / PER_PAGE);
  }
  const offset = currentPage * PER_PAGE;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovies("top_rated"));
    // setMovies(movies);
  }, []);

  return loading ? (
    <div>Loading ...</div>
  ) : error ? (
    <div>Error ...</div>
  ) : (
    <div>
      MovieList
      {/* <div>
        {movies.map((movie) => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </div> */}
      <Wrap p={20} spacing="5rem" alignItems="center">
        {movies.slice(offset, offset + PER_PAGE).map((res, index) => {
          if (typeof res !== "undefined") {
            return (
              <WrapItem key={res.id}>
                <Center key={res.id}>
                  <MovieItem key={res.id} movie={res} />
                </Center>
              </WrapItem>
            );
          }
        })}
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
      </Wrap>
    </div>
  );
}
