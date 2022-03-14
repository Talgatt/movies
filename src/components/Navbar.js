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
    navigate(`/search/${searchQuery}`);
  }
  return (
    <Flex
      className="navbar"
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding={10}
      {...props}
    >
      <Flex align="center" mr={5}>
        <Link id="header-icon" to="/">
          <Heading as="h1" size="lg" letterSpacing={"tighter"}>
            The Movie DB
          </Heading>
        </Link>
      </Flex>

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

      {/* <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
        <HamburgerIcon />
      </Box> */}

      {/* <Box style={{ marginRight: "2em" }}>
        <Button style={{ background: "none" }}>
          <Text style={{ marginRight: "0.7rem" }}>Favourite </Text> */}
      <Link className="nav-link" to="/favourites">
        Favourites
      </Link>
      {/* </Button>
      </Box> */}
    </Flex>
  );
}
