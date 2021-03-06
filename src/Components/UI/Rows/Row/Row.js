import React, { useEffect, useState } from "react";

import axios from "../../../../api/axios";

import "./Row.css";

function Row({ title, fetchUrl, isLargeRow }) {
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

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map(
          (movie) =>
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
              <img
                key={movie.id}
                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                src={`${img_url}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                onClick={() =>
                  (document.location = `https://www.youtube.com/results?search_query=${
                    movie.title ||
                    movie.original_title ||
                    movie.name ||
                    movie.original_name
                  }`)
                }
                alt={movie.name}
              />
            )
        )}
      </div>
    </div>
  );
}

export default Row;
