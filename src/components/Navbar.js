import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Heading,
  Flex,
  Button,
  useDisclosure,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useSelector } from "react-redux";

export default function Navbar(props) {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  function handleInput() {
    if (searchQuery.length > 1) {
      navigate(`/search/${searchQuery}`);
    }
  }
  return (
    <>
      <Flex
        className="navbar"
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        padding={1}
        {...props}
      >
        <Flex align="center" mr={5}>
          <Link id="header-icon" to="/">
            <Heading as="h1" size="lg" letterSpacing={"tighter"}>
              The Movie DB
            </Heading>
          </Link>
        </Flex>

        <Link className="nav-link" to="/favourites">
          <Heading as="h1" size="lg" letterSpacing={"tighter"}>
            Favourites
          </Heading>
        </Link>
      </Flex>
      <section className="welcome" id="services" p="10">
        <h2 className="welcome_message">Welcome to the Movie Database</h2>
        <Flex p="20" align="center" justifyContent="center" alignItems="center">
          <InputGroup size="md">
            <Input
              id="searchInput"
              pr="4.5rem"
              type={"text"}
              bg="white"
              placeholder="Search"
              onChange={(e) => setSearchQuery(e.target.value)}
              value={searchQuery}
            />
            <InputRightElement>
              <Button onClick={() => handleInput()}>
                <SearchIcon />
              </Button>
            </InputRightElement>
          </InputGroup>
        </Flex>
      </section>
    </>
  );
}
