import { Box, Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import ReactPaginate from "react-paginate";

export default function PageNavigation(props) {
  const [currentPage, setCurrentPage] = useState(1);
  const PER_PAGE = 5;
  const { listSize } = props;
  var pageCount = 0;
  //   console.log("list size");
  //   console.log(listSize);

  pageCount = Math.ceil(listSize / PER_PAGE);
  //   console.log("page count");
  //   console.log(pageCount);

  const offset = currentPage * PER_PAGE;

  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }

  return (
    <>
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
    </>
  );
}
