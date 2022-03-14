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
  GET_SEARCH_REQUEST,
  GET_SEARCH_SUCCESS,
  GET_SIMILAR_REQUEST,
  GET_SIMILAR_SUCCESS,
} from "../constants/movieConstants";

const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_API_URL = process.env.REACT_APP_BASE_API_URL;

export const getMovies = (req) => async (dispatch) => {
  dispatch({
    type: GET_MOVIES_REQUEST,
  });

  try {
    const res = await axios.get(
      `${BASE_API_URL}/movie/${req}?api_key=${API_KEY}`
    );

    dispatch({
      type: GET_MOVIES_SUCCESS,
      payload: res.data.results,
    });
  } catch (err) {
    // dispatch({
    //   type: GET_ERRORS,
    //   payload: err.response.data,
    // });
  }
};

export const getMovie = (movie_id) => async (dispatch) => {
  dispatch({
    type: GET_MOVIE_REQUEST,
  });

  try {
    const res = await axios.get(
      `${BASE_API_URL}/movie/${movie_id}?api_key=${API_KEY}&language=en-US`
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
  dispatch({
    type: GET_GENRE_REQUEST,
  });

  try {
    const res = await axios.get(
      `${BASE_API_URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`
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

  try {
    const res = await axios.get(
      `${BASE_API_URL}/movie/${movie_id}/similar?api_key=${API_KEY}&language=en-US&page=1`
    );
    console.log("simlar");
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

  try {
    const res = await axios.get(
      `${BASE_API_URL}/movie/${movie_id}/recommendations?api_key=${API_KEY}&language=en-US&page=1`
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

export const searchMovies = (query) => async (dispatch) => {
  dispatch({
    type: GET_SEARCH_REQUEST,
  });
  try {
    const res = await axios.get(
      `${BASE_API_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&include_adult=false`
    );

    dispatch({
      type: GET_SEARCH_SUCCESS,
      payload: res.data.results,
    });

    //return res.data.results;
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    });
  }
};
