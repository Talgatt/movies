import axios from "axios";
import {
  GET_ERRORS,
  GET_MOVIES_REQUEST,
  GET_MOVIES_SUCCESS,
} from "../constants/movieConstants";

export const getMovies = () => async (dispatch) => {
  dispatch({
    type: GET_MOVIES_REQUEST,
  });
  const req = "top_rated";
  const API_KEY = process.env.REACT_APP_API_KEY;
  console.log(`${API_KEY}`);
  try {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${req}?api_key=e36e97689319dcfa2ccb4935168f5fbb`
    );
    console.log("show data");
    console.log(res.data.results);
    dispatch({
      type: GET_MOVIES_SUCCESS,
      payload: res.data.results,
    });
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    });
  }
};
