import React from "react";

import s from "./Search.module.scss";

const Search = ({ handleChange, searchValue, getMovies }) => {
  return (
    <div>
      <div className={s.logo}>Searcher</div>
      <div className={s.search}>
        <input
          type="text"
          onChange={handleChange}
          placeholder="Начните вводить название..."
          value={searchValue}
        />
        <button onClick={getMovies} className={s.button}>
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
