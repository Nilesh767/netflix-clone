import React, { useEffect, useState } from "react";

import axios from "../../../../api/axios";

import "./Result.css";

const Result = ({ title, fetchUrl, isLargeRow, type }) => {
  const img_url = "https://image.tmdb.org/t/p/w500";

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  console.log(type);
  return (
    <div className="result">
      <h2 className="result__title">{title}</h2>
      <div className="result__posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className="result__poster"
            src={`${img_url}${movie.poster_path || movie.backdrop_path}`}
            alt={movie.name}
            onClick={() =>
              (document.location = `https://www.youtube.com/results?search_query=${
                movie.title ||
                movie.original_title ||
                movie.name ||
                movie.original_name
              }`)
            }
          />
        ))}
      </div>
    </div>
  );
};

export default Result;
