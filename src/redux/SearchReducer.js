import axios from "axios";

const CHANGE_SEARCH_VALUE = "CHANGE_SEARCH_VALUE";
const GET_MOVIES = "GET_MOVIES";

const initState = {
  movies: [],
  searchValue: "",
};

const SearchReducer = (state = initState, action) => {
  switch (action.type) {
    case CHANGE_SEARCH_VALUE: {
      return { ...state, searchValue: action.value };
    }

    case GET_MOVIES: {
      debugger;

      return { ...state, movies: action.movies };
    }

    default:
      return state;
  }
};

export const handleChangeValue = (value) => {
  return {
    type: CHANGE_SEARCH_VALUE,
    value,
  };
};

export const getMovies = () => (dispatch, getState) => {
  const searchValue = getState().searchValue;
  axios
    .get("http://www.omdbapi.com/?apikey=2caa9384&s=" + searchValue)
    .then((data) => {
      debugger;

      if (data.status === 200) {
        dispatch(getMoviesAC(data.data.Search));
      }
    });
};

export const getMoviesAC = (movies) => {
  debugger;
  return {
    type: GET_MOVIES,
    movies,
  };
};

export default SearchReducer;
