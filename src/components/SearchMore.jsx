import React from "react";
import SearchBar from "./SearchBar";

const SearchMore = ({ setgotoNext }) => {
  return (
    <>
      {/* <div className="searchmore">Search More!</div> */}
      <SearchBar setgotoNext={setgotoNext} />
    </>
  );
};
export default SearchMore;
