import {
  ADD_FAVOURITE,
  DELETE_FAVOURITE,
} from "../constants/favouriteConstants";

export const addToFavourite = (movie) => async (dispatch, getState) => {
  //const movieFavourites = JSON.parse(localStorage.getItem("favourites"));

  dispatch({
    type: ADD_FAVOURITE,
    payload: movie,
  });

  localStorage.setItem(
    "favouriteItems",
    JSON.stringify(getState().favouriteItems)
  );
};

export const removeFromFavourite = (id) => (dispatch, getState) => {
  dispatch({
    type: DELETE_FAVOURITE,
    payload: id,
  });
  localStorage.setItem(
    "favouriteItems",
    JSON.stringify(getState().favouriteItems)
  );
};
