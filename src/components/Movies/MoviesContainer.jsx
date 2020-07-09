import React from "react";
import { connect } from "react-redux";
import Movies from "./Movies";

const MoviesContainer = ({ movies }) => {
  return <Movies movies={movies} />;
};

const mapStateToProps = (state) => {
  debugger;
  return {
    movies: state.movies,
  };
};

export default connect(mapStateToProps, {})(MoviesContainer);
