import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  Stack,
  Heading,
  Flex,
  Text,
  Button,
  useDisclosure,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { HamburgerIcon, SearchIcon } from "@chakra-ui/icons";
import { useSelector } from "react-redux";

export default function Navbar(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleToggle = () => (isOpen ? onClose() : onOpen());

  const [searchQuery, setSearchQuery] = useState("");

  const searchList = useSelector((state) => state.searchList);
  const { searchResult } = searchList;
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

        <Flex p="15" align="center" justifyContent="center" alignItems="center">
          {/* <InputGroup size="md">
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
        </InputGroup> */}
          {/* <Input
          id="searchInput"
          width="100%"
          bg="white"
          placeholder="Search for movie"
          onChange={(e) => setSearchQuery(e.target.value)}
          value={searchQuery}
        ></Input>
        <Button className="button_search" onClick={() => handleInput()}>
          <SearchIcon />
        </Button> */}
        </Flex>

        {/* <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
        <HamburgerIcon />
      </Box> */}

        {/* <Box style={{ marginRight: "2em" }}>
        <Button style={{ background: "none" }}>
          <Text style={{ marginRight: "0.7rem" }}>Favourite </Text> */}
        <Link className="nav-link" to="/favourites">
          <Heading as="h1" size="lg" letterSpacing={"tighter"}>
            Favourites
          </Heading>
        </Link>
        {/* </Button>
      </Box> */}
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
