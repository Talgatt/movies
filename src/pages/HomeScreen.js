import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getMovies, searchMovies } from "../actions/movieActions";
import ReactPaginate from "react-paginate";
import MovieCard from "../components/MovieCard";
import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Input,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import SearchBox from "../components/SearchBox";
import { useNavigate } from "react-router-dom";
import PageNavigation from "../components/PageNavigation";

export default function MovieList(props) {
  const PER_PAGE = 5;
  const moviesList = useSelector((state) => state.moviesList);
  const [movieData, setMovieData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const [searchQuery, setSearchQuery] = useState("");
  const { loading, movies, error } = moviesList;
  const searchList = useSelector((state) => state.searchList);
  const { searchResult } = searchList;

  //const {searchMovies} = moviesSearch;
  const navigate = useNavigate();

  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }
  var listSize = 0;
  var pageCount = 0;
  if (!loading) {
    listSize = movies.length;
    //setMovieData(movies);
    pageCount = Math.ceil(movies.length / PER_PAGE);
    //pageCount = Math.ceil(movieData.length / PER_PAGE);
  }
  const offset = currentPage * PER_PAGE;

  function handleInput() {
    // if (searchQuery.length > 1) {
    //   //props.searchMovies(searchQuery).then((m) => setMovies(m));
    //   dispatch(searchMovies(searchQuery));
    //   setMovieData(searchResult);
    // }
    // setSearchQuery("");
    // e.preventDefault();
    // props.history.push(`/search/${searchQuery}`);
    navigate(`/search/${searchQuery}`);
  }

  // const handleInput = (e) => {
  //   e.preventDefault();
  //   if (searchQuery.length > 1) {
  //     //props.searchMovies(searchQuery).then((m) => setMovies(m));
  //     dispatch(searchMovies(searchQuery));
  //     setMovieData(searchResult);
  //   }
  //   setSearchQuery("");
  // };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovies("top_rated"));

    //if (movies !== undefined) {
    //setMovieData(movies);
    //}
  }, []);

  return loading ? (
    <div>Loading ...</div>
  ) : (
    <div>
      {/* <div>
        {movies.map((movie) => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </div> */}
      {/* <Box bg="#747474" p="10">
        <Flex p="10" align="center" justifyContent="center" alignItems="center">
          <Input
            id="searchInput"
            width="70%"
            bg="white"
            placeholder="Search for movie here"
            onChange={(e) => setSearchQuery(e.target.value)}
            value={searchQuery}
          />
          <Button bg="#FFE400" onClick={() => handleInput()}>
            <SearchIcon />
          </Button>
        </Flex>
      </Box> */}
      <Container maxW="container.x1">
        <Flex justifyContent="center" alignItems="center">
          {/* <SearchBox {...props} /> */}

          <Wrap p={20} spacing="5rem" alignItems="center">
            {movies !== undefined &&
              movies.slice(offset, offset + PER_PAGE).map((res, index) => {
                if (typeof res !== "undefined") {
                  return (
                    <WrapItem key={res.id}>
                      <Center key={res.id}>
                        <MovieCard key={res.id} movie={res} />
                      </Center>
                    </WrapItem>
                  );
                }
              })}
          </Wrap>
        </Flex>
      </Container>
      <Container maxW="container.x1">
        <Flex alignItems="center" flex-direction="column" display="inline">
          <Box p={10}>
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

        <PageNavigation listSize={listSize} />
      </Container>
    </div>
  );
}
