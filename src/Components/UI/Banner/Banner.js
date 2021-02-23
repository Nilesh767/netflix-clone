import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import axios from "../../../api/axios";
import requests from "../../../api/Requests";

import "./Banner.css";

const Banner = () => {
  const [movie, setMovie] = useState([]);
  const history = useHistory();

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  const playButtonHandler = () => {
    window.location = `https://www.youtube.com/results?search_query=${
      movie?.title || movie?.name || movie?.original_name
    }+trailer`;
  };

  const listButtonHandler = () => {
    history.push("/watchList");
  };

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "inherit",
        backgroundImage: `url("https://image.tmdb.org/t/p/w1280/${movie?.backdrop_path}")`,
      }}
    >
      <br />
      <br />
      <br />
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button" onClick={playButtonHandler}>
            Play
          </button>
          <button className="banner__button" onClick={listButtonHandler}>
            My List
          </button>
        </div>
        <h1 className="banner__description">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
};

export default Banner;
