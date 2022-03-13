import axios from "axios";
import {
  GET_ERRORS,
  GET_GENRE_REQUEST,
  GET_GENRE_SUCCESS,
  GET_MOVIES_REQUEST,
  GET_MOVIES_SUCCESS,
  GET_MOVIE_REQUEST,
  GET_MOVIE_SUCCESS,
  GET_RECOMMENDATIONS_REQUEST,
  GET_RECOMMENDATIONS_SUCCESS,
  GET_SIMILAR_REQUEST,
  GET_SIMILAR_SUCCESS,
} from "../constants/movieConstants";

export const getMovies = (req) => async (dispatch) => {
  dispatch({
    type: GET_MOVIES_REQUEST,
  });
  //const req = "top_rated";
  const API_KEY = process.env.REACT_APP_API_KEY;
  console.log(`${API_KEY}`);
  try {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${req}?api_key=${API_KEY}`
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

export const getMovie = (movie_id) => async (dispatch) => {
  dispatch({
    type: GET_MOVIE_REQUEST,
  });

  const API_KEY = process.env.REACT_APP_API_KEY;
  //   console.log(`${API_KEY}`);
  //   console.log(
  //     `https://api.themoviedb.org/3/movie/${movie_id}?api_key=e36e97689319dcfa2ccb4935168f5fbb&language=en-US`
  //   );

  try {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${API_KEY}&language=en-US`
    );

    dispatch({
      type: GET_MOVIE_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    });
  }
};

export const getGenre = () => async (dispatch) => {
  // console("get gentre");
  dispatch({
    type: GET_GENRE_REQUEST,
  });

  const API_KEY = process.env.REACT_APP_API_KEY;

  try {
    const res = await axios.get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`
    );

    console.log("genres are");
    console.log(res);
    dispatch({
      type: GET_GENRE_SUCCESS,
      payload: res.data.genres,
    });
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    });
  }
};

export const getSimilar = (movie_id) => async (dispatch) => {
  dispatch({
    type: GET_SIMILAR_REQUEST,
  });
  //const req = "top_rated";
  const API_KEY = process.env.REACT_APP_API_KEY;
  console.log(`${API_KEY}`);
  try {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${movie_id}/similar?api_key=${API_KEY}&language=en-US&page=1`
    );
    console.log("show data");
    console.log(res.data.results);
    dispatch({
      type: GET_SIMILAR_SUCCESS,
      payload: res.data.results,
    });
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    });
  }
};

export const getRecommendations = (movie_id) => async (dispatch) => {
  dispatch({
    type: GET_RECOMMENDATIONS_REQUEST,
  });
  //const req = "top_rated";
  const API_KEY = process.env.REACT_APP_API_KEY;
  console.log(`${API_KEY}`);
  try {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${movie_id}/recommendations?api_key=${API_KEY}&language=en-US&page=1`
    );
    console.log("show data");
    console.log(res.data.results);
    dispatch({
      type: GET_RECOMMENDATIONS_SUCCESS,
      payload: res.data.results,
    });
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    });
  }
};
