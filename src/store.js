import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { searchMovies } from "./actions/movieActions";
import { favouriteReducer } from "./reducers/favouritesReducer";
import {
  moviesReducer,
  movieReducer,
  genreReducer,
  similarReducer,
  recommendationsReducer,
  searchReducer,
} from "./reducers/movieReducer";

const initialState = {
  favouriteItems: localStorage.getItem("favouriteItems")
    ? JSON.parse(localStorage.getItem("favouriteItems"))
    : [],
  moviesList: {
    movies: [],
  },
};

const reducer = combineReducers({
  moviesList: moviesReducer,
  movieDetails: movieReducer,
  favouriteItems: favouriteReducer,
  genres: genreReducer,
  similar: similarReducer,
  recommendations: recommendationsReducer,
  searchList: searchReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
