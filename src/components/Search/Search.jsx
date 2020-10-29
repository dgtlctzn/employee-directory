import React from "react";

const Search = ({handleSearch}) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <form className="form-inline my-2 my-lg-0">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={() => {handleSearch()}}>
          Search
        </button>
      </form>
    </nav>
  );
};

export default Search;
