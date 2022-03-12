import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { favouriteReducer } from "./reducers/favouritesReducer";
import { moviesReducer, movieReducer } from "./reducers/movieReducer";

const initialState = {
  favouriteItems: localStorage.getItem("favouriteItems")
    ? JSON.parse(localStorage.getItem("favouriteItems"))
    : [],
};

const reducer = combineReducers({
  moviesList: moviesReducer,
  favouriteItems: favouriteReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
