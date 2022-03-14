import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getGenre, getMovies, searchMovies } from "../actions/movieActions";
import ReactPaginate from "react-paginate";
import MovieCard from "../components/MovieCard";
import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
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

  const genres = useSelector((state) => state.genres);
  const { allGenres } = genres;
  const [genreName, setGenreName] = useState("");

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
    if (searchQuery.length > 1) {
      navigate(`/search/${searchQuery}`);
    }
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
    dispatch(getGenre());

    //if (movies !== undefined) {
    //setMovieData(movies);
    //}
  }, []);

  function getGenreNames(allGenres, res) {
    const gNames = [];
    console.log("all gener");
    console.log(allGenres);
    if (allGenres !== undefined) {
      // if (allGenres.hasOwnProperty("name")) {
      console.log("has property");
      allGenres.map((genre) => {
        if (res.hasOwnProperty("genre_ids")) {
          res.genre_ids.map((id) => {
            if (Number(id) === Number(genre.id)) {
              console.log("Found match" + gNames.indexOf(genre.name));

              if (gNames.indexOf(genre.name) == -1) {
                console.log(genre);
                gNames.push(genre);
              }
            }
          });
        }
      });
      //  }
    }
    console.log("gname s");
    console.log(gNames);
    return gNames;
  }

  return loading ? (
    <div>Loading ...</div>
  ) : (
    <div>
      {/* <div>
        {movies.map((movie) => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </div> */}

      {/* <section className="welcome" id="services">
        <Box className="welcome" bg="#747474" p="10">
          <Flex
            p="10"
            align="center"
            justifyContent="center"
            alignItems="center"
          >
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
        </Box>
      </section> */}
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
      {/* <Container maxW="container.x1"> */}
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
      {/* </Container> */}
    </div>
  );
}
