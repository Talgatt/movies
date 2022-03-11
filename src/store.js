import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { movieReducer } from "./reducers/movieReducer";
import { errorReducer } from "./reducers/errorReducer";
import { projectReducer, projectsReducer } from "./reducers/projectReducer";
import { securityReducer } from "./reducers/securityReducer";

const initialState = {};
const reducer = combineReducers({
  moviesList: movieReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
