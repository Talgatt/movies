import React, { useState } from "react";

import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  HStack,
  IconButton,
  List,
  ListIcon,
  ListItem,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useColorMode,
  useColorModeValue,
  useDisclosure,
  Input,
} from "@chakra-ui/react";

import {
  MdDarkMode,
  MdExpandLess,
  MdExpandMore,
  MdLightMode,
  MdMenu,
} from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import exploreRouterMenu from "../constants/routerMenu";
import Movie from "./Movie";
import MovieList from "./MovieList";

export default function Main() {
  const [currentPage, setCurrentPage] = useState(0);

  const [searchQuery, setSearchQuery] = useState("");

  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  const navigate = useNavigate();

  const navigateToDiscover = (type, state) => {
    navigate(`/discover/${type}`, { state });
    if (isOpen) onClose();
  };

  const clearFavoriteMovie = () => {
    localStorage.clear();
  };

  return (
    <>
      <Box bg="tomato" w="100%" p={4} color="white">
        This is the Box
      </Box>
      <Input w="30%" color="white" placeholder="Search"></Input>
      <Box>
        <Button onClick={clearFavoriteMovie}>Clear Favorites</Button>
      </Box>
      <MovieList />
    </>
  );
}
