import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Stack,
  Heading,
  Flex,
  Text,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

export default function Navbar(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleToggle = () => (isOpen ? onClose() : onOpen());

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding={10}
      bg="#272727"
      color="#14A76C"
      {...props}
    >
      <Flex align="center" mr={5}>
        <Link id="header-icon" to="/">
          <Heading as="h1" size="lg" letterSpacing={"tighter"}>
            MovieDB
          </Heading>
        </Link>
      </Flex>

      <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
        <HamburgerIcon />
      </Box>

      <Box style={{ marginRight: "2em" }}>
        <Button style={{ background: "none" }}>
          {/* <Text style={{ marginRight: "0.7rem" }}>Favourite </Text> */}
          <Link className="nav-link" to="/">
            Favourite
          </Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fillRule="currentColor"
            className="bi bi-heart-fill"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
            />
          </svg>
        </Button>
      </Box>
    </Flex>
  );
}
