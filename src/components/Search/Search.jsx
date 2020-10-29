import React from "react";
import "./Search.css"

const Search = ({name, value, handleInputChange, handleSearch}) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <form className="form-inline my-2 my-lg-0 mx-auto">
        <input
          name={name}
          value={value}
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={handleInputChange}
        />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={handleSearch}>
          Search
        </button>
      </form>
    </nav>
  );
};

export default Search;
