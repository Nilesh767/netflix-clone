import React from "react";

import { discover, fetchSearchString } from "../../../api/Requests";

import Result from "./Result/Result";

const Results = ({ compType }) => {
  return (
    <div>
      {compType === "movies" ? (
        <Result title="Movies" fetchUrl={discover.fetchMovies} />
      ) : compType === "show" ? (
        <Result title="TV Shows" fetchUrl={discover.fetchShows} />
      ) : compType === "new" ? (
        <Result title="New and Popular" fetchUrl={discover.fetchNew} />
      ) : (
        <Result title="Search Results" fetchUrl={fetchSearchString(compType)} />
      )}
    </div>
  );
};

export default Results;
