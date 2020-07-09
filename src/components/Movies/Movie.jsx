import React from "react";

import s from "./Movies.module.scss";

const Movie = ({ Title, Poster, Year }) => {
  return (
    <div className={s.movie}>
      <div className={s.title}>{Title}</div>
      <div className={s.ilustration}>
        <img src={Poster} alt={Title} />
      </div>
      <div className={s.date}>{Year}</div>
    </div>
  );
};

export default Movie;
