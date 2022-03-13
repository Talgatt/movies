import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getMovie } from "../actions/movieActions";
import { Box, Image, Badge, Button } from "@chakra-ui/react";
import LoadingBox from "../components/LoadingBox";
import Rating from "../components/Rating";
import Genre from "../components/Genre";

export default function Movie(props) {
  const { id } = useParams();
  const imageUrl = "https://image.tmdb.org/t/p/w500/";

  const dispatch = useDispatch();
  const movieDetails = useSelector((state) => state.movieDetails);
  const { loading, movie } = movieDetails;

  useEffect(() => {
    dispatch(getMovie(id));
  }, [dispatch, id]);

  return (
    <div>
      {loading ? (
        <LoadingBox />
      ) : (
        <div>
          <Link to="/">Back to result</Link>

          <div className="row top">
            <div className="col-2">
              <Image src={`${imageUrl}${movie.poster_path}`} alt="no image" />
            </div>
            <div className="col-1">
              <ul>
                <li>
                  <h1>{movie.title}</h1>
                </li>
                <li>
                  <Rating
                    rating={movie.vote_average}
                    numReviews={movie.vote_count}
                  />
                </li>

                <li>
                  Overview: <p>{movie.overview}</p>
                </li>
              </ul>
            </div>
            <div className="col-1">
              <div className="card card-body">
                <ul>
                  <li>
                    <div className="row">
                      <div>Release Date</div>
                      <div className="price">{movie.release_date}</div>
                    </div>
                  </li>
                  <Box>
                    <Box as="span" color="gray.600" fontSize="sm">
                      <h4>Genres</h4>
                      {/* {movie.genres
                        ? movie.genres.map((genre) => (
                            <span key={genre.id}>{genre.name}</span>
                          ))
                        : "N/A"} */}
                      <p className="mb-3">
                        {movie.genres.map((genre) => genre.name).join(", ")}
                      </p>
                    </Box>
                  </Box>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
