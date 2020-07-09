import React from "react";
import { connect } from "react-redux";
import Search from "./Seach";

import { handleChangeValue, getMovies } from "../../redux/SearchReducer";

const SearchContainer = ({ handleChangeValue, searchValue, getMovies }) => {
  const handleChange = (e) => {
    handleChangeValue(e.target.value);
  };

  return (
    <Search
      handleChange={handleChange}
      searchValue={searchValue}
      getMovies={getMovies}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    searchValue: state.searchValue,
  };
};

export default connect(mapStateToProps, { handleChangeValue, getMovies })(
  SearchContainer
);
