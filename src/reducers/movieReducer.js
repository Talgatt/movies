import {
  GET_MOVIES_FAIL,
  GET_MOVIES_REQUEST,
  GET_MOVIES_SUCCESS,
  GET_MOVIE_REQUEST,
  GET_MOVIE_SUCCESS,
} from "../constants/movieConstants";

const initialState = {
  loading: true,
  MOVIES: [],
  MOVIE: {},
};
export const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES_REQUEST:
      return { loading: true };
    case GET_MOVIES_SUCCESS:
      return { loading: false, movies: action.payload };
    case GET_MOVIES_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIE_REQUEST:
      return { loading: true };
    case GET_MOVIE_SUCCESS:
      return { loading: false, movie: action.payload };
    default:
      return state;
  }
};
