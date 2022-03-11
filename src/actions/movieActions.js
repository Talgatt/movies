import axios from "axios";
import {
  GET_ERRORS,
  GET_MOVIES_REQUEST,
  GET_MOVIES_SUCCESS,
} from "../constants/movieConstants";

export const getProjects = () => async (dispatch) => {
  dispatch({
    type: GET_MOVIES_REQUEST,
  });
  try {
    const res = await axios.get(
      "https://api.themoviedb.org/3/movie/550?api_key=e36e97689319dcfa2ccb4935168f5fbb"
    );
    dispatch({
      type: GET_MOVIES_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    });
  }
};
