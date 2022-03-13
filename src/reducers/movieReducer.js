import {
  GET_GENRE_REQUEST,
  GET_GENRE_SUCCESS,
  GET_MOVIES_FAIL,
  GET_MOVIES_REQUEST,
  GET_MOVIES_SUCCESS,
  GET_MOVIE_REQUEST,
  GET_MOVIE_SUCCESS,
  GET_RECOMMENDATIONS_FAIL,
  GET_RECOMMENDATIONS_REQUEST,
  GET_RECOMMENDATIONS_SUCCESS,
  GET_SIMILAR_FAIL,
  GET_SIMILAR_REQUEST,
  GET_SIMILAR_SUCCESS,
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

export const genreReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GENRE_REQUEST:
      return { loading: true };
    case GET_GENRE_SUCCESS:
      return { loading: false, genre: action.payload };

    default:
      return state;
  }
};

export const similarReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SIMILAR_REQUEST:
      return { loading: true };
    case GET_SIMILAR_SUCCESS:
      return { loading: false, movies: action.payload };
    case GET_SIMILAR_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const recommendationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RECOMMENDATIONS_REQUEST:
      return { loading: true };
    case GET_RECOMMENDATIONS_SUCCESS:
      return { loading: false, movies: action.payload };
    case GET_RECOMMENDATIONS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
