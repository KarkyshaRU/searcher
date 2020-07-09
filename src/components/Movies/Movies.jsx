import React from "react";

import Movie from "./Movie";

import empty from "../../assets/empty.png";
import s from "./Movies.module.scss";

const Movies = ({ movies }) => {
  debugger;
  return movies && movies.length ? (
    <div className={s.content}>
      {movies.map((movieDate) => {
        return <Movie {...movieDate} />;
      })}
    </div>
  ) : (
    <div className={s.empty}>
      <div>
        <img src={empty} alt="empty" />
      </div>
      <div>Empty</div>
    </div>
  );
};

export default Movies;
