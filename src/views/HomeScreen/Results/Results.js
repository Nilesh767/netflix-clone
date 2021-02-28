import React from "react";

import { discover } from "../../../api/Requests";

import Result from "./Result/Result";

const Results = () => {
  let compType = "e";

  return (
    <div>
      {compType === "movies" ? (
        <Result title="Movies" fetchUrl={discover.fetchMovies} />
      ) : compType === "shows" ? (
        <Result title="TV Shows" fetchUrl={discover.fetchShows} />
      ) : (
        <Result title="New and Popular" fetchUrl={discover.fetchNew} />
      )}
    </div>
  );
};

export default Results;
