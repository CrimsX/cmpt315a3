import React from "react";

import "./searchbar.styles.css";

/*
 * Filter emails based on their subject
 */

export const SearchBar = ({ placeholder, onKeyDown }) => {
    const handleKeyDown = (event) => {
        onKeyDown(event);
    }

    return (
    <input
      className="searchbar"
      type="search"
      placeholder={placeholder}
      onKeyDown={handleKeyDown}
    />
)};

export default SearchBar
